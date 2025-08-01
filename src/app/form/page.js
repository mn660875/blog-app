"use client";
import Link from "next/link";

import { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import NavbarAdmin from "../admin/NavbarAdmin";

export default function Page() {
  const router= useRouter("")
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuther] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleform = async (e) => {
     e.preventDefault();
  

    let data = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog`, {
      method: "POST",
      body: JSON.stringify({ title, category, author, content, image }),
    });
    data = await data.json();

    if (data.success) {
      toast.success("Post Added Successfully");
      setTitle("");
      setCategory("");
      setAuther("");
      setContent("");
      router.push("/admin")
    } else {
      toast.error("Not Added Post");
    }
  };
  return (
    <>
    <NavbarAdmin/>
      <div className="w-full h-screen p-6 flex items-center justify-center">
        <form className="form" onSubmit={handleform}>
          <h1 className="text-center font-semibold text-2xl mt-2">Add Blog</h1>
          <div className="input-section">
            <label>Title:</label>
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="input-section">
            <label>Category:</label>
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="input-section">
            <label>Author:</label>
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuther(e.target.value)}
            />
          </div>
          <div className="input-section">
            <label>Content:</label>
            <textarea
              className="textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <div className="input-section ">
            <select
              className="select"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              
            >
              <option value="">Selete Image</option>
              <option value="/imgs/food-1.jpg">FOOD-1.jpg</option>
              <option value="/imgs/travel-1.jpg">TRAVEL-1.jpg</option>
              <option value="/imgs/food-2.jpg">FOOD-2.jpg</option>
              <option value="/imgs/food-3.jpg">FOOD-3.jpg</option>
              <option value="/imgs/web-1.jpg">WEB-1.jpg</option>
              <option value="/imgs/travel-2.jpg">Travel-2 .jpg</option>
              <option value="/imgs/Astronomy.jpg">Astronomy</option>
              <option value="/imgs/web-2.jpg">web-2</option>
              <option value="/imgs/trade.jpg">Trade</option>

            </select>
          </div>
          <button className="btn" type="submit">
            Add Post
          </button>

          <Link href={"/admin"}>Home</Link>
        </form>
      </div>
    </>
  );
}
