import { LocateIcon, Mail, MapPin, PhoneIncoming } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { SOCIAL_MEDIA_LOGOS } from "./config";

const Footer = () => {
  return (
    <div className="bg-primary py-20 ">
      <MaxWidthWrapper className="gap-10 flex flex-col">
        <div className="grid grid-cols-4 justify-between">
          <div className="gap-5 flex flex-col ">
            <h4 className="text-xl font-semibold text-white">Contact Us</h4>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-start gap-3 ">
                <Mail className="text-white w-5 h-5" />
                <div className="flex flex-col gap-1">
                  <Link
                    href={"#"}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-white p-0 h-fit font-light"
                    )}
                  >
                    info@ikigai.com{" "}
                  </Link>
                  <Link
                    href={"#"}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-white p-0 h-fit font-light"
                    )}
                  >
                    info@ikigai.com{" "}
                  </Link>
                </div>
              </div>
              <div className="flex flex-row items-start gap-3 ">
                <PhoneIncoming className="text-white w-5 h-5" />
                <div className="flex flex-col gap-1 items-start">
                  <Link
                    href={"#"}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-white p-0 h-fit font-light"
                    )}
                  >
                    Call: +971 4 344 1122
                  </Link>
                  <Link
                    href={"#"}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-white p-0 h-fit font-light"
                    )}
                  >
                    Call: +098 765 432 100
                  </Link>
                </div>
              </div>
              <div className="flex flex-row items-start gap-3 ">
                <MapPin className="text-white w-5 h-5 flex-shrink-0" />
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-white text-sm font-light">
                    Lower Ground - 212 - opposite Mall Management office (Grand
                    Parking - Downtown Dubai - Dubai Mall - Dubai
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                {SOCIAL_MEDIA_LOGOS.map((socialLogo) => (
                  <Button variant={"secondary"} className="p-2 rounded-full">
                    <socialLogo.logo className="text-primary w-6 h-6 " />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="gap-5 flex flex-col items-start ">
            <h4 className="text-xl font-semibold text-white">About Us</h4>
            <Link
              href={"#"}
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-white p-0 h-fit font-light"
              )}
            >
              Patient Resources
            </Link>
            <Link
              href={"#"}
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-white p-0 h-fit font-light"
              )}
            >
              Insurance Information
            </Link>
          </div>
          <div className="gap-5 flex flex-col items-start">
            <h4 className="text-xl font-semibold text-white">Blogs</h4>
          </div>
          <div className="gap-5 flex flex-col items-start">
            <h4 className="text-xl font-semibold text-white">Feedback</h4>
            <Input
              className="w-full bg-transparent border-x-0 rounded-none border-t-0 placeholder:text-white text-white"
              placeholder="Name"
            />
            <Input
              className="w-full bg-transparent border-x-0 rounded-none border-t-0 placeholder:text-white text-white"
              placeholder="Phone"
            />
            <textarea
              rows={4}
              className={cn(
                "border-white border text-sm px-3 py-2",
                "text-white w-full bg-transparent border-x-0 rounded-none border-t-0 placeholder:text-white"
              )}
              placeholder="Message"
            />
            <Button variant={"secondary"} className="rounded-full px-10">
              Submit
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-white font-light text-sm">
            Copyright © 2023 Design & Developed by swc
          </p>
          <div className="flex items-center gap-5">
            <Link
              href={"#"}
              className={cn(
                buttonVariants({ variant: "link" }),
                "p-0  font-light text-white"
              )}
            >
              Privacy Policy{" "}
            </Link>
            <Link
              href={"#"}
              className={cn(
                buttonVariants({ variant: "link" }),
                "p-0  font-light text-white"
              )}
            >
              Terms & Conditions{" "}
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
