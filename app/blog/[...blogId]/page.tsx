import Image from "next/image";
import prisma from "@/prisma/prisma";

const BlogIdPage = async ({ params }: any) => {
  const blog = await prisma.blog.findFirst({
    where: {
      id: params.blogId.toString(),
    },
  });
  return (
    <div className="mx-auto max-w-screen-xl pt-24">
      <h1 className="text-center">{blog?.title}</h1>
      <div className="mt-10">
        <p>{blog?.description}</p>
      </div>
      <div className="px-2 lg:px-0 flex flex-col space-y-2 mdspace-y-2 items-center mt-10">
        {blog?.photos.map((photo: string, index: number) => (
          <Image key={index} src={photo} alt="" width={800} height={400} />
        ))}
      </div>
    </div>
  );
};

export default BlogIdPage;
