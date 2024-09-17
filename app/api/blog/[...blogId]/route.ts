import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import prisma from "@/prisma/prisma";

export const GET = async (requst: NextRequest, {params}: {params: {blogId: string}}) =>{
    
    try {
        const result = await prisma.blog.findFirst({
          where: {
            id: params.blogId.toString(),     
          }
        });
        
        if(!result) {
          return new NextResponse('Blog Not Found!', {status:201});
        }
    
        return NextResponse.json(result, {status: 201});
      }
      catch(error){
        return new NextResponse("Internal error", { status: 500 });
      }
    
}