"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";




export default function NavbarAdmin() {
  const router= useRouter();

  const logOut= ()=>{
    toast.success("Logout successfully")
    setTimeout(() => {
      router.push("/");

    }, 1000);
   
    
  }


  return (
    <div
     className="w-full md:w-40 md:fixed  md:h-screen bg-[#006D6F] p-4 text-white text-center flex md:flex-col  items-center"
    >
      <div >
        <h1 className="font-bold text-center bg-blue-600 md:bg-transparent p-2 rounded-lg text-white">Food Ninja Blog</h1>
      </div>

      <div className="flex items-center md:flex-col justify-center gap-3 md:mt-6  text-lg ">
      <Link href={"/admin"}>Home</Link>
        <Link className="actions" href={"/form"}>Add Blog</Link>
        
        <Link className="actions" href={"/admin/users"}>Users</Link>

      </div>
      <div className="flex items-center justify-center">
        <button onClick={logOut} className="bg-red-500 p-2 rounded-lg absolute bottom-10 cursor-pointer ">Logout</button>
      </div>
      
    </div>
  );
}
