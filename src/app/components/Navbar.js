"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default  function Navbar(){
    const router= useRouter()
    return (
        <div className="w-full h-12 p-4 bg-[#006D6F] text-white flex items-center justify-between">
           <h1 className="font-semibold font-xl tracking-wide">Savor Sprint</h1>
           <div className="flex items-center gap-5">
            <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}`}>Blog</Link>
            <Link href={"/about"}>About</Link>
            <button
        className="bg-blue-500 text-white px-6 py-3 rounded"
        onClick={() => router.push("/login-page")}
      >Admin</button>
           </div>
        </div>
    )
}