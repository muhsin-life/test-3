import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));
  
  const MENU_ITEMS = [
    { label: "About Us", slug: "/about-us" },
    { label: "Specialities", slug: "/specialities" },
    { label: "Doctors", slug: "/doctors" },
    { label: "Blogs", slug: "/blogs" },
    { label: "Contact Us", slug: "/contact-us" },
  ];

  return (
    <div className="bg-white  w-full border-b  py-9 relative ">
      <MaxWidthWrapper>
        <div className="flex justify-between w-full flex-1 ">
          <div>
            <Image
              src={
                "https://ikigaimedicalcentre.com/wp-content/uploads/2023/06/Group-6.svg"
              }
              height={150}
              width={150}
              alt="Site Logo"
            />
          </div>
          <div className="flex gap-2" ref={navRef}>
            {MENU_ITEMS.map((menuItem, i) => {
              const handleOpen = () => {
                if (activeIndex === i) {
                  setActiveIndex(null);
                } else {
                  setActiveIndex(i);
                }
              };

              const close = () => setActiveIndex(null);

              const isOpen = i === activeIndex;
              return (
                <>
                  <Button
                    onClick={handleOpen}
                    variant={"ghost"}
                    className="gap-1.5 text-base"
                  >
                    {menuItem.label}

                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-all text-muted-foreground",
                        {
                          "-rotate-180": isOpen,
                        }
                      )}
                    />
                  </Button>

                  {isOpen ? (
                    <div
                      onClick={() => close()}
                      className={cn(
                        "absolute inset-x-0 top-full text-sm text-muted-foreground border-muted border-t z-50 ",
                        {
                          "animate-in fade-in-10 slide-in-from-top-5":
                            !isAnyOpen,
                        }
                      )}
                    >
                      <div
                        className="absolute inset-0 top-1/2 bg-white shadow "
                        aria-hidden="true"
                      />
                      <div className="relative bg-white">
                        <MaxWidthWrapper>
                          <div className="py-14 gap-y-10 flex flex-col">
                            <div className="flex items-center justify-between ">
                              <h3 className="text-2xl font-semibold">
                                {menuItem.label}
                              </h3>
                              <Button>Read More</Button>
                            </div>

                            <div className="grid grid-cols-4 gap-x-8  ">
                              <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                                {Array(3).fill(
                                  <div className="gap-3 flex flex-col">
                                    <div className="bg-muted aspect-video rounded-xl" />
                                    <div className="bg-muted rounded-xl p-2 w-3/4"></div>
                                    <div className="bg-muted rounded-lg p-3 w-full"></div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </MaxWidthWrapper>
                      </div>
                    </div>
                  ) : null}
                </>
              );
            })}
            <Button>Book an Appointment</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
