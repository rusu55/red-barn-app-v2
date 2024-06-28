import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import prisma from "@/prisma/prisma";

import {Resend} from 'resend'
import { EmailTemplate } from "@/app/(utils)/video-questionnaire/components/emailTemplate";
const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) =>{
    const body = await request.json();
    try{
        const newQuestionnaire  = await prisma.video.create({
            data:{
                brideName: body.brideName,
                groomName: body.groomName,
                email: body.email,
                weddingDate: body.weddingDate.toISOString(),
                songSelection: body.songsOptions.value,
                highlightSong: body?.highlightSong,
                videoSongs: body?.videoSongs,
                details: body?.details,
                address: body?.address,
                city: body?.city,
                state: body?.state,
                zipCode: body?.zipCode
            }
        })

        try{
            const { data, error } = await resend.emails.send({
                from: 'Video Questionnaire <office@redbarnweddingstudio.xyz>',
                to: ['rusu55@yahoo.com', 'redbarnbride@yahoo.com'],
                subject: `Video Questionnaire - ${body.data.brideName} , ${body.data.groomName} - ${body.data.weddingDate}`,
                react: EmailTemplate({
                    
                })  
            });
            if (error) {
                return NextResponse.json({ error }, { status: 500 });
              }
              return NextResponse.json({ data }, {status: 201});    
        }
        catch(error){
            return NextResponse.json({ error }, { status: 500 });
        }        
    }
    catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw error
        }
    }
}