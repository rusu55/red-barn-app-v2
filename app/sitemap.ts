import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    const response = await fetch('http://localhost:3000/api/blog').then((res) => res.json())

    const blogEntries: MetadataRoute.Sitemap =  response.map(({id, postDate}: any) => ({
        url: `${process.env.BASE_URL}/blog/${id}`,
        lastModified: new Date(postDate)
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
            url: `${process.env.BASE_URL}/blog`
        },
        ...blogEntries
    ]
}