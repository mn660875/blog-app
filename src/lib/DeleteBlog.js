"use client"
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

export default function DeleteBlog(props){
    const router= useRouter();
    const deleteRecord=async()=>{
        const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
        if (!confirmDelete) return;
        let response= await fetch(  `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${props.id}`,{
            method:"DELETE",
            })
            response= await response.json();
            if(response.success){
                router.push("/admin")
               setTimeout(() => {
                toast.success("Blog deleted successfully");
               }, 1000);
                
            }
    }
    return(
        <button style={
            {
                backgroundColor:"#B31B1B",
                border:"none",
                outline:"none",
                padding: "6px 8px",
                color: "white",
                borderRadius:"6px",
                display:"flex",
                alignItems:"center",
                cursor:"pointer",
                gap:"4px"
            }}
            
            onClick={deleteRecord}>Delete</button>
    )
}