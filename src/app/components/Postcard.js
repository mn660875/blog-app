"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { format } from "date-fns";

export default function PostCard({ post }) {
  return (
    <div className=" rounded-xl shadow hover:shadow-md transition flex flex-col overflow-hidden">
      {/* Image */}
      {post.image && (
        <Link href={`/form/${post._id}`}>
          <div className="relative w-full h-48">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1 space-y-2">
        <Link href={`/form/${post._id}`}>
          <div className="cursor-pointer">
            {/* Category */}
            {post.category && (
              <p className="bg-blue-900 text-sm text-white  p-1 px-2 rounded-md w-fit mb-1">
                {post.category}
              </p>
            )}

            {/* Title */}
            <h2 className="text-xl font-semibold  hover:text-blue-600 transition line-clamp-2">
              {post.title}
            </h2>
          </div>
        </Link>

        {/* Date */}
        {post.createdAt && (
          <div className="flex items-center  text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {format(new Date(post.createdAt), "dd MMM yyyy")}
          </div>
        )}

        {/* Content preview */}
        <p className=" line-clamp-3">
          {post.content?.slice(0, 120)}...
        </p>

        {/* Read more button */}
        <div className="mt-2">
          <Link href={`/form/${post._id}`}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
