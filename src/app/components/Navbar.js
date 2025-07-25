"use client"
import Link from "next/link";

export default  function Navbar(){
    return (
        <div className="w-full h-12 p-4 bg-[#007BA7] text-white flex items-center justify-between">
           <h1 className="font-semibold font-xl tracking-wide">Food Ninja</h1>
           <div className="flex items-center gap-5">
            <Link href="/">Blog</Link>
            <Link href={"/about"}>About</Link>
            <Link href={`/admin`}>Admin</Link>
           </div>
        </div>
    )
}