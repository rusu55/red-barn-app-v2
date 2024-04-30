import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import blogImage from "/public/images/blog1.jpg";

export const BlogFeature = ({ data }: any) => {
  return (
    <>
      {data.map((blog: any, index: number) => (
        <div key={index} className="flex flex-col">
          <div className="relative overflow-hidden place-self-center">
            <Link href={`blog/${blog.id}`}>
              <Image
                src={blog.coverPhoto}
                width={740}
                height={490}
                alt=""
                className="duration-500 ease-in-out hover:scale-110 object-cover"
                sizes="(min-width: 1280px) 74rem, (min-width: 1024px) 74rem, (min-width: 768px) 50rem, (min-width: 640px) 50vw, 100vw"
              />
            </Link>
          </div>
          <span className="mt-6 uppercase text-xs tracking-widest  text-roze">
            Wedding Photography
          </span>
          <Link href={`blog/${blog.id}`}>
            <h5 className="text-[1.6rem] mt-2">{blog.title}</h5>
          </Link>
          {blog.dexroption !== "" && (
            <p className="mt-4">
              {blog.description}
            </p>
          )}
          <span className="text-right text-xs mb-12 pr-14">
            {format(blog.postDate, "MM/dd/yyyy")}
          </span>
        </div>
      ))}
    </>
  );
};
