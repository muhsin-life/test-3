
import Link from 'next/link';
import Image from 'next/image';
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

import { getDate } from './utils/utils';

export default function Post({ post, featuredMedia }:any) {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Link href={`/posts/${post.slug}`}>
          {featuredMedia &&
              <Image
                src={featuredMedia['media_details'].sizes.medium['source_url']}
                width={180}
                height={120}
                alt={featuredMedia['alt_text']}
              />
          }
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{post.title.rendered}</h5>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div>
            <p className="card-text">
              <small className="text-muted">On {getDate(post.modified)}</small>
            </p>
            <Link href={`/posts/${post.slug}`}>
             See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}