import { connectionStr } from "@/lib/db";
import { Post } from "@/lib/model/blog";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import mongoose from "mongoose";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default async function PostPage({ params }) {
  const { id } = params;
  await mongoose.connect(connectionStr);
  const post = await Post.findById(id).lean();

  if (!post) {
    return <div className="p-4 text-center">Post not found</div>;
  }

  return (
   <div>

  <Navbar/>
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      
      {/* Image */}
      {post.image && (
        <div className="relative w-full h-72 rounded overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Category */}
      {post.category && (
        <p className="bg-blue-900 text-sm text-white p-1 px-2 rounded-md w-fit">
          {post.category}
        </p>
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{post.author}</p>

      {/* Date */}
      <div className="flex items-center text-gray-500 text-sm">
        <Calendar className="w-4 h-4 mr-1" />
        {format(new Date(post.createdAt), "dd MMM yyyy")}
      </div>

      {/* Content */}
      <p className="text-gray-700 whitespace-pre-line">
        {post.content}
      </p>  

      <Link href={"/"} className="  mt-4 bg-[#003262] px-3 p-2 text-white tracking-wide font-semibold rounded-lg text-center">Main</Link>
    </div>
    </div>
  );
}
