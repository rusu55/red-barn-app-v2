import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import axios from 'axios';

import _ from "lodash";
import prisma from "@/prisma/prisma";


export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {

const id = params.blogId
const {data: response} = await axios.get(`http://localhost:3000/api/blog/${id}`)

return {
    title: response.title,
    description: `Best of Wedding Photography and Cinematography in Chicago, Red Barn Wedding Studio brigs to the future Brides and Grooms an new Weding Photography Blog about: ${response.title}`,
  };
}

const BlogIdPage = async ({ params }: any) => {
  const id = params.blogId
  const {data: response} = await axios.get(`http://localhost:3000/api/blog/${id}`)

  return (
    <div className="mx-auto max-w-screen-xl pt-2">
      {response?.photos && (
        <div className="flex w-full items-center justify-center">
          <Image src={response?.photos[0]} alt="" width={1000} height={600} />
        </div>
      )}
      <div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-start">
        <div className="w-full md:w-1/2 px-4">
          <span className="inline-block mt-5 uppercase text-xs text-roze tracking-[5px]">
            {response?.postType} Photography
          </span>
          <h1 className="w-[80%] text-left text-3xl pt-2">{response?.title}</h1>
          <hr className="line line-hr-left"></hr>
          <p>{response?.description}</p>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="mx-auto w-[80%] ">
            <li className="py-2 border-b-2 border-roze flex justify-between items-center">
              <span className=" uppercase">Photographer:</span>
              <span className="font-pariss text-lg text-right w-[80%] leading-9">
                Red Barn Studio
              </span>
            </li>
            <li className="py-2 border-b-2 border-roze flex justify-between items-center">
              <span className=" uppercase">Cinematographer:</span>
              <span className="font-pariss text-lg text-right w-[80%] leading-9">
                Red Barn Studio
              </span>
            </li>
            <li className="py-2 border-b-2 border-roze flex justify-between items-center">
              <span className=" uppercase">Venue:</span>
              <span className="font-pariss text-lg text-right w-[80%] leading-9">
                {_.split(response?.title, "-").pop()}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-2 lg:px-0 flex flex-col space-y-2 mdspace-y-2 items-center mt-10">
        {response?.photos.map(
          (photo: string, index: number) =>
            index > 0 && (
              <Image key={index} src={photo} alt="" width={800} height={400} />
            )
        )}
      </div>
    </div>
  );
};

export default BlogIdPage;

