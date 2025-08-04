"use client";

import { useState, useMemo } from "react";
import PostCard from "./Postcard";

export default function PostList({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = useMemo(() => {
    const allCats = posts.map((post) => post.category);
    return ["All", ...new Set(allCats)];
  }, [posts]);

  // Filtered posts
  const filteredPosts = posts
    .filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((post) =>
      selectedCategory === "All" ? true : post.category === selectedCategory
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

      {/* Horizontal Category Buttons */}
      <div className="w-full overflow-x-auto mb-6">
        <div className="flex gap-2 min-w-max justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 text-sm rounded-full whitespace-nowrap border ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              } hover:bg-blue-100 transition`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-4 content-center">
        {filteredPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          filteredPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}
