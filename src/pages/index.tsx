import {
  getDoctors,
  getPackages,
  getTestimonials,
} from "../components/utils/wordpress";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { BookNow } from "@/components/BookNow";
import { OurSpecilaities } from "@/components/OurSpecilaities";
import { OurDoctors } from "@/components/OurDoctors";
import { OurPackages } from "@/components/OurPackages";
import { TDoctors, TPackages } from "@/components/types/types";
import { Testimonials } from "@/components/Testimonials";
import { Blogs } from "@/components/Blogs";
import { AboutUs } from "@/components/AboutUs";

interface HomePageProps {
  doctors: TDoctors[];
  packages: TPackages[];
}

export default function Home({ doctors, packages }: HomePageProps) {
  return (
    <div>
      <div className="bg-primary">
        <MaxWidthWrapper>
          <div className="flex flex-col flex-1  py-5">
            <ImageSlider />
          </div>
        </MaxWidthWrapper>
      </div>
      <BookNow doctors={doctors} />
      <OurSpecilaities />
      <OurDoctors doctors={doctors} />
      <OurPackages packages={packages} />
      <Testimonials />
      <Blogs />
      <AboutUs />
    </div>
  );
}

export async function getStaticProps({ params }: any) {
  const doctors = await getDoctors();
  const packages = await getPackages();
  const testimonials = await getTestimonials();

  return {
    props: {
      doctors,
      packages,
      testimonials,
    },
    revalidate: 10,
  };
}
