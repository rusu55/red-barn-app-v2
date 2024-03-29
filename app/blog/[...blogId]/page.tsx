import Image from "next/image";
import prisma from "@/prisma/prisma";

const BlogIdPage = async ({ params }: any) => {
  const blog = await prisma.blog.findFirst({
    where: {
      id: params.blogId.toString(),
    },
  });
  return (
    <div className="mx-auto max-w-screen-xl mt-20">
      <h1 className="text-center">{blog?.title}</h1>
      <div className="mt-10">
        <p>{blog?.description}</p>
      </div>
      <div className="flex flex-col space-y-6 items-center mt-10">
        {blog?.photos.map((photo: string, index: number) => (
          <Image key={index} src={photo} alt="" width={800} height={400} />
        ))}
      </div>
    </div>
  );
};

export default BlogIdPage;
