import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export const GET = async (requst: NextRequest, {params}: {params: {shooterId: string}}) =>{

    
    try {
        const result = await prisma.employee.findMany({
            where: {
                id: params.shooterId.toString(),
            },
            select:{
                name: true,
                title: true,
                details: true,
                photo: true,
                photography: true,
                
                videography:true,
            }
        })
        
        if(!result) {
          return new NextResponse('Blog Not Found!', {status:201});
        }
    
        return NextResponse.json(result, {status: 201});
      }
      catch(error){
        return new NextResponse("Internal error", { status: 500 });
      }
    
}