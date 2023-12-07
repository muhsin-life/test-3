import Link from "next/link";
import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";

export const OurSpecilaities = () => {
  const SPECIALITIES = [
    {
      label: "Paediatrics",
      href: "/speciality/paediatrics",
      logo: Icons.paediatrics,
    },
    {
      label: "Internal Medicine",
      href: "/speciality/internal-medicine",
      logo: Icons.internalMedicine,
    },
    {
      label: "Paediatric Dentistry ",
      href: "/speciality/paediatric-dentistry",
      logo: Icons.paediatricDentistry,
    },
    {
      label: "Orthodontics",
      href: "/speciality/orthodontics",
      logo: Icons.orthodontics,
    },
    {
      label: "Obstetrics and Gynaecology",
      href: "/speciality/obstetrics-and-gynaecology",
      logo: Icons.gynaecology,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center bg-white py-20">
      <MaxWidthWrapper>
        <div className="gap-3 flex flex-col">
          <h1 className=" text-3xl font-extrabold tracking-tight lg:text-4xl text-primary">
            Our Specialities
          </h1>
          <hr className="w-28 mx-auto border-4 border-[#D6B048]" />
        </div>
        <div className="mx-auto max-w-4xl">
          <div className=" mt-14 grid grid-cols-3 gap-10">
            {SPECIALITIES.map((speciality) => (
              <Link
                href={speciality.href}
                className="shadow-lg border border-muted h-64 w-64 mx-auto rounded-xl flex items-center justify-center flex-col gap-4 hover:shadow-xl  "
              >
                <div className="border border-primary p-3 rounded-lg ">
                  <speciality.logo className="w-14 h-14 fill-primary" />
                </div>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-primary">
                  {speciality.label}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
