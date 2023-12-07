import { Swiper, SwiperSlide } from "swiper/react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import type SwiperType from "swiper";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/button";

export const Testimonials = () => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);

  const Testimonials = [
    { profile_logo: "/images/testimonials/avatar-1.png", name: "Andrew Smith" },
    { profile_logo: "/images/testimonials/avatar-2.png", name: "Jacob Mosaic" },
    { profile_logo: "/images/testimonials/avatar-3.png", name: "Jimmy Carton" },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-20">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-3 justify-center items-center text-center">
          <h4 className=" text-xl font-semibold text-[#F48789] ">
            Testimonials
          </h4>
          <h1 className=" text-3xl font-extrabold tracking-tight lg:text-4xl text-primary">
            What Our Patients Say About Us
          </h1>
        </div>
        <Swiper
          onSwiper={(swiper) => setSwiper(swiper)}
          spaceBetween={50}
          modules={[Pagination]}
          slidesPerView={3}
          className="mt-14"
        >
          {Array(2).fill(
            Testimonials.map((testimonial, i) => (
              <SwiperSlide
                key={`avatar-img-${i}`}
                className="mt-10 w-full  mb-3"
              >
                <div className=" rounded-2xl hover:shadow-lg   bg-white border-muted border p-5 flex flex-col items-center justify-center text-center gap-3">
                  <div className="-mt-14">
                    <Image
                      src={testimonial.profile_logo}
                      alt={`avatar-img-${i}`}
                      width={80}
                      height={80}
                      className="rounded-full shadow"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <h4 className=" text-xl font-bold text-primary ">
                      {testimonial.name}
                    </h4>
                    <div className="flex space-x-1">
                      {Array(5).fill(
                        <Star className="text-amber-300 fill-amber-300 w-4 h-4" />
                      )}
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde aliquid dolores error dignissimos veritatis, labore
                    architecto repudiandae, atque optio eum nemo consequatur
                    iusto, est possimus culpa esse deserunt quia pariatur!
                  </p>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>

        <div className="space-x-4 flex items-center justify-center w-full mt-4 ">
          <button
            onClick={(e) => {
              e.preventDefault();
              swiper?.slidePrev();
            }}
            className="rounded-full w-11 hover:bg-primary border border-primary hover:text-white text-primary items-center flex justify-center h-11"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              swiper?.slideNext();
            }}
            className="rounded-full w-11 bg-primary hover:border border-primary text-white hover:text-primary hover:bg-white items-center flex justify-center h-11"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
