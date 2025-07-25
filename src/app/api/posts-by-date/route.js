
import { connectionStr } from "@/lib/db";
import { Post } from "@/lib/model/blog";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {

    await mongoose.connect(connectionStr)
 

  const posts = await Post.find();

  // Group by date
  const postCounts = {};

  posts.forEach((post) => {
    const date = new Date(post.createdAt).toISOString().split("T")[0]; // 'YYYY-MM-DD'
    if (!postCounts[date]) postCounts[date] = 0;
    postCounts[date]++;
  });

  // Convert to array for recharts
  const data = Object.entries(postCounts).map(([date, count]) => ({
    date,
    count,
  }));

  // Sort by date ascending
  data.sort((a, b) => new Date(a.date) - new Date(b.date));

  return NextResponse.json(data);
}
