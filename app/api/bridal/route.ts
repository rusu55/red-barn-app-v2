import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import {format} from 'date-fns'
import {Resend} from 'resend'
import { EmailTemplate } from "@/app/(utils)/bridal/components/emailTemplate";
const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) =>{
    const body = await request.json();
    console.log(body)
    
        const newQuestionnaire  = await prisma.bridal.create({
            data:{
                name: body.name,
                phone: body.phone,
                email: body.email,
                weddingDate: new Date(body.weddingDate).toISOString(),                
                details: body?.details,                
            }
        })
       
        try{
            const { data, error } = await resend.emails.send({
                from: 'Bridal Inquiry <office@redbarnweddingstudio.com>',
                to: ['rusu55@yahoo.com','redbarnbride@yahoo.com'],
                subject: `Bridal Inquiry - ${body.name} , ${body.email} - ${body?.weddingDate}`,
                react: EmailTemplate({
                    name: body?.name,
                    email: body?.email,
                    phone: body?.phone,   
                    weddingDate: format(body?.weddingDate, "PPP"),                    
                    details: body?.details,                                     
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
    
