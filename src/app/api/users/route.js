import { connectionStr } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);

  const users = await User.find(); // only fetch usernames

  return NextResponse.json({ success: true, users });
}
