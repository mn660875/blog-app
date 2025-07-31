"use client"
import FlipLink from "@/components/ui/text-effect-flipper";
import Navbar from "./Navbar";
import { CiSearch } from "react-icons/ci";
export default  function Dashboard(){
    return(
        <div className=" flex items-center justify-center  flex-col   mt-8">
         
         <FlipLink href="#" className=" text-lg font-bold py-3">Savour&nbsp;Sprint</FlipLink>
            <div className="text-center">
          
                <p className="text-gray-500 mt-2">A blog about food, experience and recipes.</p>
            </div>
           
        </div>
    )
}