import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { RenderHTML } from "@/lib/render-html";
import Head from "next/head";

import _ from "lodash";
import prisma from "@/prisma/prisma";


export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {

const id = params.blogId
const blog = await fetch(`http://localhost:3000/api/blog/${id}`).then((res) => res.json())



return {
    title: blog.title,
    description: `Red Barn Wedding Studio brigs to the future Brides and Grooms an new Weding Photography Blog about: ${blog.title}`,
    openGraph:{
      images: [
        {
          url: blog.photos[0]
        }
      ]
    },
   // other: {
    // 'script:ld_json': JSON.stringify(structuredData)
   // },
  };
}

const BlogIdPage = async ({ params }: any) => {
  const id = params.blogId
  const blog = await fetch(`http://localhost:3000/api/blog/${id}`).then((res) => res.json())
  const structuredData: any = {
    
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: `Red Barn Wedding Studio brigs to the future Brides and Grooms an new Weding Photography Blog about: ${blog.title}`,
    image: blog.photos[0],
    datePublished: blog.createdAt,
    
  }
  return (
    <>
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }} />

    <div className="mx-auto max-w-screen-xl pt-2">
      {blog?.photos && (
        <div className="flex w-full items-center justify-center">
          <Image src={blog?.photos[0]} alt={'Chicago Wedding Photographer - Venue: ' + _.split(blog?.title, "-").pop()} width={1000} height={600} />
        </div>
      )}
      <div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-start">
        <div className="w-full md:w-1/2 px-4">
          <span className="inline-block mt-5 uppercase text-xs text-roze tracking-[5px]">
            {blog?.postType} Photography
          </span>
          <h1 className="w-[80%] text-left text-3xl pt-2">{blog?.title}</h1>
          <hr className="line line-hr-left"></hr>
          <div><RenderHTML htmlContent= {blog.description} /></div>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="mx-auto w-[80%] ">
            <li className="py-2 border-b-2 border-roze flex justify-between items-center">              
                <span className=" uppercase">Photographer:</span>
                <h2 className="font-pariss text-lg text-right w-[80%] leading-9">
                  Red Barn Wedding Studio
                </h2>
              
            </li>
            <li className="py-2 border-b-2 border-roze flex justify-between items-center">
              <span className=" uppercase">Cinematographer:</span>
              <span className="font-pariss text-lg text-right w-[80%] leading-9">
                Red Barn Wedding Studio
              </span>
            </li>
            <li className="py-2 border-b-2 border-roze flex justify-between items-center">
              <span className=" uppercase">Venue:</span>
              <h2 className="font-pariss text-lg text-right w-[80%] leading-9">
                {_.split(blog?.title, "-").pop()}
              </h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-2 lg:px-0 flex flex-col space-y-2 mdspace-y-2 items-center mt-10">
        {blog?.photos.map(
          (photo: string, index: number) =>
            index > 0 && (
              <Image key={index} src={photo} alt="Red Barn Wedding Photography" width={800} height={400} />
            )
        )}
      </div>
    </div>
    </>
  );
};

export default BlogIdPage;

