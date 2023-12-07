import { Metadata } from "next";

export function getDate(date:string) {
    return new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }

  export function constructMetadata({
    title = 'Unlocking Positive Health: Experience Exceptional Care at IKIGAI Medical Centre in Dubai',
    description = 'Step into a world of holistic well-being at IKIGAI Medical Centre. Our premium multispecialty healthcare facility in Dubai is dedicated to providing uncompromising quality and expertise. Discover the transformative power of positive health through personalized attention and cutting-edge medical services. Book an appointment and embark on a journey towards a fulfilling and healthy life.',
    image = '/thumbnail.png',
    icons = '/favicon.ico',
    noIndex = false,
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: image,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
        creator: '@ikigaimedicalcentre',
      },
      icons,
      metadataBase: new URL('https://ikigaimedicalcentre.com/'),
      ...(noIndex && {
        robots: {
          index: false,
          follow: false,
        },
      }),
    }
  }