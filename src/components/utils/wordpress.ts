const BASE_URL = "https://ikigaimedicalcentre.com/wp-json/wp/v2";

export async function getDoctors() {
  const doctorsRes = await fetch(BASE_URL + "/our-doctors?_embed");
  const doctors = await doctorsRes.json();
  return doctors;
}

export async function getPackages() {
  const packagesRes = await fetch(BASE_URL + "/packages?_embed");
  const packages = await packagesRes.json();
  return packages;
}

export async function getTestimonials() {
  const testimonialsRes = await fetch(BASE_URL + "/testimonials?_embed");
  const testimonials = await testimonialsRes.json();
  return testimonials;
}

