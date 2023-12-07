export interface DoctorsAcfProps {
  speciallity: string[];
  qualification: string;
  languages: string;
  years_of_experience: string;
  qualifications: string;
  practices_at: string;
  treatment_and_managment: {
    treatment_1: string;
    treatment_2: string;
    treatment_3: string;
    treatment_4: string;
    treatment_5: string;
    treatment_6: string;
  };
  doctors_image: string;
  reviews: string;
}

export interface TDoctors {
  acf: DoctorsAcfProps;
  title: {
    rendered: string;
  };
  slug: string;
}

export interface PackagesAcfProps {
  filter_label: string;
  image_url: string;
  offer_label: string;
  sale_label: string;
  secondary_image_url: string;
  sub_description: string;
  sub_title: string;
}

export interface TPackages {
  acf: PackagesAcfProps;
  title: {
    rendered: string;
  };
  slug: string;
  content:string
}



// export interface PackagesAcfProps {

// }

// export interface TPackages {
//   acf: PackagesAcfProps;
//   title: {
//     rendered: string;
//   };
//   slug: string;
//   content:string
// }
