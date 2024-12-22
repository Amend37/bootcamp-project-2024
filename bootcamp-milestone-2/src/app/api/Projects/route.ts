import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";

export async function GET() {
  await connectDB();

  try {
    const projects = await ProjectModel.find().lean();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
