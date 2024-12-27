'use client';

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import DatePill from "./DatePill";

export default function BlogPostCard({ post }) {
  const imageUrl = post.image ? urlFor(post.image).auto("format").width(1920).height(1080).url() : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="space-y-4 md:hover:opacity-75 transition-opacity"
    >
      {/* Render Image if URL is Available */}
      {imageUrl && (
        <Image
          src={imageUrl}
          width={1920}
          height={1080}
          alt={post.title}
          className="rounded-2xl border border-primary-400"
        />
      )}

      <div className="space-y-2">
        <DatePill date={post.date} />
        <div>
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="line-clamp-1 text-sm text-primary-600">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
