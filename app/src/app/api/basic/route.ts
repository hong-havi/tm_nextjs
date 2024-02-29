import { NextResponse, NextRequest } from "next/server";

export async function GET( 
    req : NextRequest, 
    res: NextResponse 
){
  return NextResponse.json([{data:{}}],{status:200})
}

export async function POST() {
  try {
    // Get all admins using Prisma
    return NextResponse.json({s:"sdasd"}, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get admins" },
      {
        status: 500,
      }
    );
  }
}

