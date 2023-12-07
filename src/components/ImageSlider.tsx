import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import type SwiperType from "swiper";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGE_SLIDERS = [
  {
    url: "/images/home-slider/slider-img-1.png",
    heading: "Healthcare Without Any Compromise",
    description:
      "A new age of delivering care is here. Let us show you the intersection of your health’s different parts and help you discover true wellness",
  },
  {
    url: "/images/home-slider/slider-img-2.png",
    heading: "Healthcare that Matters",
    description:
      "We’re more than a medical clinic. At Ikigai, we believe in not just healing but providing long-term holistic answers that count.",
  },
  {
    url: "/images/home-slider/slider-img-3.png",

    heading: "Healthcare Like No Other",
    description:
      "Experience premium multispeciality services combining philosophy and empathy that puts you truly in the centre.",
  },
];

// interface ImageSliderProps {
//   urls: string[]
//

const ImageSlider = () => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (IMAGE_SLIDERS.length ?? 0) - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (IMAGE_SLIDERS.length ?? 0) - 1,
      });
    });
  }, [swiper, IMAGE_SLIDERS]);

  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300";
  const inactiveStyles = "hidden text-gray-400";

  return (
    <div className="group relative  overflow-hidden rounded-xl">
      <div className=" z-10 inset-0 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slideNext();
          }}
          className={cn(activeStyles, "right-3 transition", {
            [inactiveStyles]: slideConfig.isEnd,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slideConfig.isEnd,
          })}
          aria-label="next image"
        >
          <ChevronRight className="h-4 w-4 text-zinc-700" />{" "}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slidePrev();
          }}
          className={cn(activeStyles, "left-3 transition", {
            [inactiveStyles]: slideConfig.isBeginning,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slideConfig.isBeginning,
          })}
          aria-label="previous image"
        >
          <ChevronLeft className="h-4 w-4 text-zinc-700" />{" "}
        </button>
      </div>

      <Swiper
        pagination={{
          renderBullet: (_, className) => {
            return `<span class="rounded-full transition ${className}"></span>`;
          },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={1}
        className=" w-full"
      >
        {IMAGE_SLIDERS.map((slider, i) => (
          <SwiperSlide key={i} className="-z-10 relative  w-full">
            <Image
              height={100}
              width={1200}
              loading="eager"
              className=" w-full "
              src={slider.url}
              alt="Product image"
            />
            <div className="absolute z-10 inset-0 flex flex-col max-w-xl h-full w-full items-center m-20">
              <h1 className=" text-4xl text-primary uppercase font-extrabold tracking-tight lg:text-5xl">
                {slider.heading}
              </h1>
              <p className="leading-7 mt-5 text-lg">{slider.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
