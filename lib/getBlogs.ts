import prisma from "@/prisma/prisma";

export const getBlogs = async ({
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
            result = await prisma.blog.findMany({
                skip: skip,
                take: limit,
                orderBy: [
                    { orderBy: 'asc'}
                ],
                where:{                    
                   // title: query != null ? query.toString() : undefined 
                   OR: [
                    {title:{
                    contains: query?.toString(),
                    mode: 'insensitive'
                   }},
                    {postType:{
                       contains: query?.toString(),
                       mode: 'insensitive'
                    }}
                    ]
                }             
              
            })
        }
        else{
            result = await prisma.blog.findMany({
                skip: skip,
                take: limit,
                orderBy: [
                    { orderBy: 'asc'}
                ]
                })
        }
            await new Promise(resolve => setTimeout(resolve, 300));
            
            return JSON.parse(JSON.stringify(result))
        } catch(error){
            return {error}
        }
        
}