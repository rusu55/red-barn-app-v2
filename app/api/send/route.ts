import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import prisma from "@/prisma/prisma";
import {format} from 'date-fns'
import {Resend} from 'resend'
import { EmailTemplate } from "@/app/(utils)/video-questionnaire/components/emailTemplate";
const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) =>{
    const body = await request.json();
    
    
        const newQuestionnaire  = await prisma.video.create({
            data:{
                brideName: body.brideName,
                groomName: body.groomName,
                email: body.email,
                weddingDate: new Date(body.weddingDate).toISOString(),
                songSelection: body.songsOptions.value,
                highlightSong: body?.highlightSong,
                videoSongs: body?.videoSongs,
                details: body?.details,
                address: body?.address,
                city: body?.city,
                state: body?.state.label,
                zipCode: body?.zipCode
            }
        })
       
        try{
            const { data, error } = await resend.emails.send({
                from: 'Video Questionnaire <office@redbarnweddingstudio.xyz>',
                to: ['rusu55@yahoo.com'],
                subject: `Video Questionnaire - ${body.brideName} , ${body.groomName} - ${body.weddingDate}`,
                react: EmailTemplate({
                    brideName: body.brideName,
                    groomName: body.groomName,
                    weddingDate: body.weddingDate,
                    songsOptions: body.songsOptions.value,
                    highlightSong: body?.highlightSong,
                    videoSongs: body?.videoSongs,
                    details: body?.details,
                    address: body?.address,
                    city: body?.city,
                    zipCode: body?.zipCode,
                    state: body?.state.label
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
    
