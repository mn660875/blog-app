import Navbar from "./Navbar";
import { CiSearch } from "react-icons/ci";
export default  function Dashboard(){
    return(
        <div className=" flex items-center justify-center flex-col pt-8">
         

            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-serif">Savor <span className="text-4xl md:text-5xl text-[#1F2937] tracking-wider ">Sprint</span></h1>
                <p className="text-gray-500 mt-2">A blog about food, experience and recipes.</p>
            </div>
           
        </div>
    )
}