import Link from "next/link";



export default function NavbarAdmin() {



  return (
    <div
     className="w-full md:w-40 md:fixed  md:h-screen bg-[#006D6F] p-4 text-white flex md:flex-col  items-center"
    >
      <div >
        <h1 className="font-bold text-center bg-blue-600 md:bg-transparent p-2 rounded-lg text-white">Food Ninja Blog</h1>
      </div>

      <div className="flex items-center md:flex-col justify-center gap-3 md:mt-6  text-lg ">
        <Link className="actions" href={"/form"}>Add Blog</Link>
        <Link className="actions" href={"#"}>Comments</Link>
        <Link className="actions" href={"#"}>Users</Link>

      </div>
      
    </div>
  );
}
