import prisma from "@/prisma/prisma";
import { v4 as uuid } from "uuid";
import { Hero } from "@/components/ui/Hero";
import hero_img from "/public/images/about.jpg";
import { SearchBar } from "@/components/blog/SearchBar";
import { RecentBlogs } from "@/components/blog/RecentBlogs";
import { TagsComponent } from "@/components/blog/TagsComponent";
import { InfiniteScrollingBlogs } from "@/components/blog/InfiniteScrollingBlogs";

import { fetchBlogs } from "./action";

const BlogPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  let blogs = await fetchBlogs({ search });
  const recentBlogs = blogs.slice(0, 3);

  return (
    <div className="pt-20 md:pt-0">
      <Hero image={hero_img} title="" description="" />
      <div className="mx-auto max-w-screen-xl py-20 flex flex-wrap justify-center gap-4 ">
        {/** Left Section */}
        <div
          className="w-full px-4 lg:w-[60%]  order-2 lg:order-1"
          key={Math.random()}
        >
          <InfiniteScrollingBlogs search={search} initialBlogs={blogs} />
        </div>
        {/** Right Section */}
        <div className="w-full px-4 lg:w-[38%] flex flex-col gap-y-6 order-1 lg:order-2">
          <SearchBar />
          <RecentBlogs recentBlogs={recentBlogs} />
          <TagsComponent />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
