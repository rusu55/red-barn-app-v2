'use server'

import { getBlogs } from "@/lib/getBlogs"

export async function fetchBlogs({page=1, search}: {page?:number, search?: string | undefined}){
    const blogs = await getBlogs({page})

    return blogs
}