import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export const GET = async (requst: NextRequest) =>{
    
    try {
        const result = await prisma.blog.findMany()
        
        if(!result) {
          return new NextResponse('Blog Not Found!', {status:201});
        }
    
        return NextResponse.json(result, {status: 201});
      }
      catch(error){
        return new NextResponse("Internal error", { status: 500 });
      }
    
}