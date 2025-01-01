import prisma from "@/prisma/prisma";

export const getVenues = async ({
    query, 
    page= 1, 
    limit= 3} : {
    query?: string
    page?: number
    limit?: number 
    }) =>{
        let result
        try{
            const skip = (page-1) * limit
          if(query){
            result = await prisma.venue.findMany({
                skip: skip,
                take: limit,
                orderBy: [
                    { name: 'asc'}
                ],
                where:{                    
                   // title: query != null ? query.toString() : undefined 
                   OR: [
                    {name:{
                    contains: query?.toString(),
                    mode: 'insensitive'
                   }},
                    {name:{
                       contains: query?.toString(),
                       mode: 'insensitive'
                    }}
                    ]
                }             
              
            })
        }
        else{
            result = await prisma.venue.findMany({
                skip: skip,
                take: limit,
                orderBy: [
                    { name: 'asc'}
                ]
                })
        }
            await new Promise(resolve => setTimeout(resolve, 300));
            
            return JSON.parse(JSON.stringify(result))
        } catch(error){
            return {error}
        }
        
}