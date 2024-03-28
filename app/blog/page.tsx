import prisma from "@/prisma/prisma";
import { Hero } from "@/components/ui/Hero";
import hero_img from "/public/images/about.jpg";
import { BlogFeature } from "@/components/blog/BlogFeature";
import { RecentBlogs } from "@/components/blog/RecentBlogs";
import { TagsComponent } from "@/components/blog/TagsComponent";

const BlogPage = async () => {
  const blogs = await prisma.blog.findMany({});
  
  return (
    <>
      <Hero image={hero_img} title="" description="" />
      <div className="mx-auto max-w-screen-xl py-20 flex flex-wrap justify-center gap-4">
        {/** Left Section */}
        <div className="w-full px-4 md:w-[60%]">
          <BlogFeature data={blogs}/>
        </div>
        {/** Right Section */}
        <div className="w-full px-4 md:w-[38%] flex flex-col gap-y-6">
          <RecentBlogs />
          <TagsComponent />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
