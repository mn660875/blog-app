"use client"

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarAdmin from "../NavbarAdmin";
import { toast } from "react-toastify";

export default function Page(){
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuther] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    useEffect(()=>{
        getUserDetails()
    },[])
    
    const getUserDetails=async()=>{
    
        let data = await fetch(`http://localhost:3000/api/blog/${id}`)
        data = await data.json()
        console.log(data)
        
        if(data.success){
            let result = data.result
            setTitle(result.title || "");
setAuther(result.author || "");
setImage(result.image || "");
setContent(result.content || "");
setCategory(result.category || "");
          
        }
    }



    const handleform=async(e)=>{
        e.preventDefault()
        let data= await fetch(`http://localhost:3000/api/blog/${id}`,{
            method:"PUT",
            body: JSON.stringify({title, author, content, image, category })
        })
        data= await data.json();
        if(data.result){
            toast.success("blog Has Updated")
        }


    }
    





    return(
        <>
         <NavbarAdmin/>
      <div className="w-full h-screen p-6 flex items-center justify-center">
        <form onSubmit={handleform}>
          <h1 className="text-center font-semibold text-2xl mt-2">Update Blog</h1>
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
            </select>
          </div>
          <button className="btn" type="submit">
            Add Post
          </button>

          <Link href={"/admin"}>Home</Link>
        </form>
      </div>
    </>
        
    )

}