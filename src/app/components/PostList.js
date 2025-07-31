"use client";

import { useState } from "react";
import PostCard from "./Postcard";

export default function PostList({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts
  .filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="w-full mt-5 px-4 md:px-10 flex flex-col items-center">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
      />

      {/* Posts Grid */}
      <div className="md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-4 content-center">
        {filteredPosts.length === 0 ? (
          <op></op>
        ) : (
          filteredPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}
