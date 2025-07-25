import { connectionStr } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();
  await mongoose.connect(connectionStr)


  const newUser = new User({ username, password });
  await newUser.save();

  if (username === password) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
