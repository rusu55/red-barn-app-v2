import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) =>{

    return NextResponse.json('merge', {status: 201})
}