import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import type SwiperType from "swiper";
import { Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { TPackages } from "./types/types";
import Link from "next/link";

export const OurPackages = ({ packages }: { packages: TPackages[] }) => {
  const isHttpUrl = (url: string) =>
    url && (url.startsWith("http://") || url.startsWith("https://"));

  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (packages.length ?? 0) - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (packages.length ?? 0) - 1,
      });
    });
  }, [swiper, packages]);

  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 opacity-0 -translate-y-1/2 aspect-square h-11 w-11 z-50 place-items-center rounded-full ";
  const inactiveStyles = "hidden text-gray-400";

  //   function unslugify(slugs: string[]) {
  //     return slugs.map((slug) => slug.toLowerCase().replace(/-/g, " ")).join(",");
  //   }

  return (
    <div className="flex flex-col items-center justify-center text-center bg-white py-20 gap-14">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-6">
          <div className="gap-3 flex flex-col">
            <h1 className=" text-3xl font-extrabold tracking-tight lg:text-4xl text-primary">
              Our Packages
            </h1>
            <hr className="w-28 mx-auto border-4 border-[#D6B048]" />
          </div>
          <p className=" text-lg  mx-auto px-10">
            Our packages are designed to give you the Ikigai experience. These
            are health and wellness tests and offerings to alert you to possible
            areas you’re struggling with and help you navigate suitable care for
            a sound body and mind
          </p>
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
            className=" "
          >
            {packages.map((med_package, i) => (
              <SwiperSlide
                key={i}
                className="-z-10 mb-7 relative  border-muted border rounded-xl shadow-lg flex flex-col "
              >
                {isHttpUrl(med_package.acf.image_url) ? (
                  <Image
                    src={med_package.acf.image_url}
                    height={"300"}
                    width={"300"}
                    className="rounded-xl h-full rounded-b-none w-full object-cover object-center"
                    alt={med_package.title.rendered}
                  />
                ) : (
                  <div className="flex-1 h-[300px] w-[300px]"></div>
                )}
                <div className="flex flex-col  py-7  border-muted border-t items-center justify-center gap-5 px-5">
                  <div className="border-slate-100 -mt-14 bg-white border rounded-xl shadow-lg p-3 px-5">
                    <h4 className="text-lg font-semibold tracking-tight text-primary">
                      {med_package.title.rendered}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-3 items-center justify-center ">
                    {med_package.acf.filter_label !== "" && (
                      <p className="text-primary line-through decoration-red-500 decoration-[2px] font-medium">
                        {/* {med_package.acf.filter_label} */}
                        AED 999
                      </p>
                    )}

                    {med_package.acf.offer_label !== "" && (
                      <p className="text-primary text-lg  font-medium">
                        {/* {med_package.acf.filter_label} */}
                        {med_package.acf.offer_label}
                      </p>
                    )}
                    <h4 className="text-primary text-lg font-bold tracking-tight">
                      {med_package.acf.sale_label}
                    </h4>

                    {/* <h4 className="text-primary text-xl font-semibold tracking-tight"></h4> */}
                  </div>
                  <Link
                    href={`/package/${med_package.slug}`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "px-7 font-semibold text-lg"
                    )}
                  >
                    Details
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};
