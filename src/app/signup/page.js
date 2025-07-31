"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";


export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    let data= await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/signup`,{
      method: "POST",
      body: JSON.stringify({username, password})

    })
    data= await data.json();

    if(data.success){
      toast.success("Admin Add Successfully");
      setPassword("")
      setUsername("")
    }
     else{
     toast.error("Error while signing up")
     }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-5">Admin Signup</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button
            className={`bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded-lg transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            
          >
           Signup
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
        <p className="mt-2 text-center">Already Have an Accout? <Link href={"/login-page"} className="font-semibold">Login</Link></p>
      </div>
    </div>
  );
}
