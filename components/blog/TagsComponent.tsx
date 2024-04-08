import { Button } from "../ui/Button";
import { Widget } from "../ui/Widget";

export const TagsComponent = () => {
  return (
    <Widget>
      <h6 className=" border-b border-gray-200 text-2xl font-normal pb-2">
        Blogs Tags
      </h6>
      <div className="mt-6 flex flex-col items-center justify-center gap-2 lg:items-start">
        <Button href="/">Wedding Photography</Button>
        <Button href="/">Engagement Photography</Button>
      </div>
    </Widget>
  );
};
