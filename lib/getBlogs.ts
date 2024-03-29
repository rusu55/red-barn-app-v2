import prisma from "@/prisma/prisma";

export const getBlogs = async ({
    query, 
    page= 1, 
    limit= 3} : {
    query?: string
    page?: number
    limit?: number 
    }) =>{
        try{
            const skip = (page-1) * limit

            const result = await prisma.blog.findMany({
                skip: skip,
                take: limit,
            })

            await new Promise(resolve => setTimeout(resolve, 300));
            
            return JSON.parse(JSON.stringify(result))
        } catch(error){
            return {error}
        }
        
}