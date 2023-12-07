import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

export const AboutUs = () => {
  return (
    <div className="flex flex-col py-20 gap-14">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 justify-center items-start">
            <h1 className=" text-3xl font-extrabold tracking-tight lg:text-4xl text-primary">
              About us
            </h1>
            <hr className="w-28 mt-2 mr-auto border-4 border-[#D6B048]" />
          </div>

          {/* <Button className="rounded-full px-6">Read All Blogs</Button> */}
        </div>
        <div className="py-10">
          <div className="flex justify-between  gap-10">
            <Image
              src={"/images/about/about-img.png"}
              height={500}
              width={500}
              alt="about-img"
              className="rounded-xl"
            />
            <div className="flex flex-col  justify-between">
              {" "}
              <p >
                Ikigai Medical Centre’s holistic approach delivers comprehensive
                services tailored to your needs across multiple specialities. We
                are an entirely patient-first centre, prioritising your
                physical, mental, and emotional well-being in a welcoming,
                state-of-the-art facility equipped with the latest technologies.
                tailored to your needs across multiple specialities. We are an
                entirely patient-frst centre, prioritising your physical,
                mental, and emotional well-being in a welcoming,
                state-of-the-art facility equipped with the latest technologies.
              </p>
              <Button className="w-fit rounded-full px-6 ">Read More About us</Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
