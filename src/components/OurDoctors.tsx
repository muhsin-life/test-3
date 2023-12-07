import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import type SwiperType from "swiper";
import { Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { TDoctors } from "./types/types";

export const OurDoctors = ({ doctors }: { doctors: TDoctors[] }) => {
  const isHttpUrl = (url: string) =>
    url && (url.startsWith("http://") || url.startsWith("https://"));

  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (doctors.length ?? 0) - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (doctors.length ?? 0) - 1,
      });
    });
  }, [swiper, doctors]);

  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 opacity-0 -translate-y-1/2 aspect-square h-11 w-11 z-50 place-items-center rounded-full ";
  const inactiveStyles = "hidden text-gray-400";

  function unslugify(slugs: string[]) {
    return slugs.map((slug) => slug.toLowerCase().replace(/-/g, " ")).join(",");
  }
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white py-20">
      <MaxWidthWrapper>
        <div className="gap-3 flex flex-col">
          <h1 className=" text-3xl font-extrabold tracking-tight lg:text-4xl text-primary">
            Our Doctors
          </h1>
          <hr className="w-28 mx-auto border-4 border-[#D6B048]" />
        </div>
      </MaxWidthWrapper>

      <div className="relative overflow-hidden w-full max-w-[1500px] mx-auto">
        <div className=" z-10  transition">
          <button
            onClick={(e) => {
              e.preventDefault();
              swiper?.slideNext();
            }}
            className={cn(activeStyles, "right-3 transition", {
              [inactiveStyles]: slideConfig.isEnd,
              " bg-primary opacity-100": !slideConfig.isEnd,
            })}
            aria-label="next image"
          >
            <ArrowRight className="h-5 w-5 text-white" />{" "}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              swiper?.slidePrev();
            }}
            className={cn(activeStyles, "left-3 transition", {
              [inactiveStyles]: slideConfig.isBeginning,
              " bg-primary opacity-100": !slideConfig.isBeginning,
            })}
            aria-label="previous image"
          >
            <ArrowLeft className="h-5 w-5 text-white" />{" "}
          </button>
        </div>
        <MaxWidthWrapper>
          <Swiper
            pagination={{
              renderBullet: (_, className) => {
                return `<span class="rounded-full transition ${className}"></span>`;
              },
            }}
            onSwiper={(swiper) => setSwiper(swiper)}
            spaceBetween={50}
            modules={[Pagination]}
            slidesPerView={3}
            className="  mt-14"
          >
            {doctors.map((doctor, i) => (
              <SwiperSlide
                key={i}
                className="-z-10 relative  border-muted border  rounded-xl shadow-lg flex flex-col mb-5 "
              >
                {isHttpUrl(doctor.acf.doctors_image) ? (
                  <Image
                    src={doctor.acf.doctors_image}
                    height={"300"}
                    width={"300"}
                    className="rounded-xl  mx-auto"
                    alt={doctor.title.rendered}
                  />
                ) : (
                  <div className="flex-1 h-[300px] w-[300px]"></div>
                )}
                <div className="flex flex-col  py-7  border-muted border-t items-center justify-center gap-5 px-5">
                  <div className="gap-3 flex flex-col">
                    <h4 className="scroll-m-20 text-xl font-bold text-primary tracking-tight">
                      {doctor.title.rendered}
                    </h4>
                    <p className=" text-base capitalize">
                      {unslugify(doctor.acf.speciallity)}{" "}
                    </p>
                    {doctor.acf.reviews !== "" ? (
                      <div className=" flex space-x-1 items-center justify-center ">
                        <Star className="fill-amber-400 text-amber-400 w-5 h-5 mb-1" />
                        <p className=" text-base capitalize">
                          {doctor.acf.reviews}
                        </p>
                      </div>
                    ) : null}
                  </div>
                  <Button className="font-semibold text-base" size={"lg"}>
                    Book Now
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};
