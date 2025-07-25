import { connectionStr } from "@/lib/db"
import { User } from "@/lib/model/user"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function POST(request){
    const payload = await request.json()
    await mongoose.connect(connectionStr)
    let post = new User(payload)
    const result = await post.save()
    return NextResponse.json({result, success: true})
}
export async function GET(){
    let data=[];
    try {
        await mongoose.connect(connectionStr);
        data= await User.find();
        
    } catch (error) {
        data= {success: "error"}
        
    }
    return NextResponse.json({result:data, success: true})
    
}