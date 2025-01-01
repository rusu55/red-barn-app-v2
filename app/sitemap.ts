import { MetadataRoute } from "next";
import prisma from "@/prisma/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    //const response = await fetch('http://localhost:3000/api/blog').then((res) => res.json())
    const blogs = await prisma.blog.findMany();

    const blogEntries: MetadataRoute.Sitemap =  blogs.map(({id, postDate}: any) => ({
        url: `${process.env.BASE_URL}/blog/${id}`,
        lastModified: new Date(postDate)
    }))

    const venues = await prisma.venue.findMany();

    const venuesEntries: MetadataRoute.Sitemap =  venues.map(({id, createAt}: any) => ({
        url: `${process.env.BASE_URL}/venue/${id}`,
        lastModified: new Date(createAt)
    }))
    
    return [
        {
            url: `${process.env.BASE_URL}/about-wedding-photographer`
        },
        {
            url: `${process.env.BASE_URL}/chicago-wedding-photographer`
        },
        {
            url: `${process.env.BASE_URL}/contact-wedding-photographer`
        },
        {
            url: `${process.env.BASE_URL}/portfolio-wedding-photographer`
        },
        {
            url: `${process.env.BASE_URL}/reviews-wedding-photographer`
        },
        {
            url: `${process.env.BASE_URL}/services/wedding_photography`
        },
        {
            url: `${process.env.BASE_URL}/services/wedding_cinematography`
        },
        {
            url: `${process.env.BASE_URL}/services/wedding_photobooth`
        },
        {
            url: `${process.env.BASE_URL}/reviews-wedding-photographer`
        },
        {
            url: `${process.env.BASE_URL}/blog`
        },
        {
            url: `${process.env.BASE_URL}/wedding-venues`
        },
        ...blogEntries,
        ...venuesEntries,

    ]
}