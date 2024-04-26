'use client';

import { Button } from "../ui/Button";
import { Widget } from "../ui/Widget";
import { useRouter } from "next/navigation";

export const TagsComponent = () => {
  const router = useRouter();
  return (
    <Widget>
      <h6 className=" border-b border-gray-200 text-2xl font-normal pb-2">
        Blogs Tags
      </h6>
      <div className="mt-6 flex flex-col items-center justify-center gap-2 lg:items-start">
        <Button onClick={()=> router.push('/blog?search=wedding')}>Wedding Photography</Button>
        <Button onClick={()=> router.push('/blog?search=engagement')}>Engagement Photography</Button>
      </div>
    </Widget>
  );
};
