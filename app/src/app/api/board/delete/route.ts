import { NextRequest, NextResponse } from "next/server";

export async function POST( 
    req : NextRequest, 
){
    return NextResponse.json(
        {
            msg:"ok"
        },
        {
            status: 200
        }
    )
}