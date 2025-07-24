import { connectionStr } from "@/lib/db";
import { Post } from "@/lib/model/blog";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const productId = params.id;
    const filter = {_id: productId}
    console.log(productId)
    const payload= await request.json()
    console.log(payload)
    await mongoose.connect(connectionStr)
    const result= await Post.findOneAndUpdate(filter, payload);
    return NextResponse.json({result , success:true})

}
export async function GET(request, {params}){
    const productId =params.id;
    const filter = {_id: productId}
    await mongoose.connect(connectionStr)
    const result= await Post.findById(filter);
    return NextResponse.json({result , success:true})

}
export async function DELETE(request, {params}){
    const postId= params.id;
    const record= {_id: postId};
    await mongoose.connect(connectionStr);
    const result= await Post.deleteOne(record);
    return NextResponse.json({result, success: true}) 
}