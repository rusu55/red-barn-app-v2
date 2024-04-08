"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Widget } from "../ui/Widget";

export const RecentBlogs = ({ recentBlogs }: any) => {
  const [blogs, setBlogs] = useState(recentBlogs);
  return (
    <div className="hidden lg:block">
      <Widget>
        <h6 className=" border-b border-gray-200 text-2xl font-normal pb-2">
          Recent Posts
        </h6>
        <ul className="pt-5 flex flex-wrap flex-col gap-y-4">
          {blogs?.map((blog: any, index: number) => (
            <li key={index}>
              <div className="flex gap-3">
                <Image src={blog.coverPhoto} alt="" width={100} height={100} />
                <div className="flex flex-col">
                  <Link
                    href={`/blog/${blog.id}`}
                    className="text-[1rem] font-semibold"
                  >
                    {blog.title}
                  </Link>
                  <p className="line-clamp-2">{blog.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Widget>
    </div>
  );
};
