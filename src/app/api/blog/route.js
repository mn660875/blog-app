import { connectionStr } from "@/lib/db";
import { Post } from "@/lib/model/blog";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function  GET(){
    let data = [];
    let success= true;

    try{
        await mongoose.connect(connectionStr);
        data= await Post.find();

    } catch{
        data ={ result: "false"}
        success= false
    }

    return NextResponse.json({result: data, success})

}
// export async function POST(request){
//     const payload= await request.json()
//     await mongoose.connect(connectionStr)
//     let product= new Product(payload)
//     const result = await product.save()
//     return NextResponse.json({result, success: true})
// }

export async function POST(request){
    const payload= await request.json()
    await mongoose.connect(connectionStr);
    let post = new Post(payload)
    const result= await post.save()
    return NextResponse.json({result, success: true})
}
