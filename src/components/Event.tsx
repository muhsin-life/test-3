import Link from 'next/link';
import Image from 'next/image';

export default function Event({ event, featuredMedia }:any) {
  return (
    <div className="card mb-3" style={{ width: '18rem' }}>
      <Link href={`/events/${event.slug}`}>
          <Image
            src={featuredMedia['media_details'].sizes.medium['source_url']}
            width={288}
            height={190}
            alt={featuredMedia['alt_text']}
            className="card-img-top"
          />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{event.title.rendered}</h5>
        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: event.excerpt.rendered }}
        ></div>
        <p className="card-text">
          <small className="text-muted">{event.acf.date}</small>
        </p>
        <Link href={`/events/${event.slug}`}>
          See more
        </Link>
      </div>
    </div>
  );
}