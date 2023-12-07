import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export const Blogs = () => {
  return (
    <section className="flex flex-col  py-20">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 justify-center items-start">
            <h4 className=" text-xl font-semibold text-[#F48789] ">
              Blogs & News
            </h4>
            <h1 className=" text-3xl font-extrabold tracking-tight lg:text-4xl text-primary">
              Our Latest Blogs
            </h1>
            <hr className="w-28 mt-2 mr-auto border-4 border-[#D6B048]" />
          </div>
          <Button className="rounded-full px-6">Read All Blogs</Button>
        </div>
        <div className="flex gap-7 items-start py-10">
          <div className="gap-5 flex flex-col">
            <div className="rounded-xl h-full min-h-[500px] flex flex-col  w-full bg-muted flex-shrink-0"></div>
            <div className="flex items-center justify-between">
              <Button className="rounded-full px-5">Pediatrician</Button>
              <h4 className="text-lg font-semibold text-primary tracking-tight">
                29th October 2023
              </h4>
            </div>
            <h3 className="font-bold text-2xl text-primary">
              How to Choose a Heart Failure Treatment Program
            </h3>
            <p className="line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rem
              cum commodi aspernatur, maiores itaque facere error mollitia
              libero laboriosam magni tempore doloremque non sed sapiente
              repellat ipsa facilis doloribus!
            </p>
            <Link
              href={"#"}
              className={cn(buttonVariants({ variant: "link" }), "block px-0")}
            >
              Read More
            </Link>{" "}
          </div>

          <div className="flex flex-col justify-center gap-5">
            {Array(4).fill(
              <div className="flex gap-5">
                <div className="w-[150px] h-[150px] rounded-xl bg-muted flex-shrink-0"></div>
                <div className="flex flex-col justify-between">
                  <h4 className="font-bold text-xl text-primary">
                    How to Choose a Heart Failure Treatment Program
                  </h4>
                  <p className="line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis rem cum commodi aspernatur, maiores itaque facere
                    error mollitia libero laboriosam magni tempore doloremque
                    non sed sapiente repellat ipsa facilis doloribus!
                  </p>
                  <Link
                    href={"#"}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "block px-0"
                    )}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
