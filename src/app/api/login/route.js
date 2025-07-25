import { connectionStr } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const password = searchParams.get("password");

  if (!username || !password) {
    return NextResponse.json({ success: false, message: "Username and password required." });
  }

  await mongoose.connect(connectionStr);

  const user = await User.findOne({ username, password });

  if (user) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}

