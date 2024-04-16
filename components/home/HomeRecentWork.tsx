

import Image from "next/image";
import Link from "next/link";

import { RevealComponent } from "../ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";

const introText = [
  {
    id: 0,
    title: "A Creative Lens on LOve",
    text: "Capturing the essence of love and commitment, our wedding photography is not just about the images we create, but the moments we encapsulate.",
  },
  {
    id: 1,
    title: "The Art of Wedding Memories",
    text: "Let us tell your unique love story through our lens, creating memories that will be cherished for a lifetime.",
  },
  {
    id: 2,
    title: "Capturing the Heartbeat of Your Happily Ever After",
    text: "Our mission is to encapsulate the laughter, the tears, and the unspoken bonds that make your day unforgettable.",
  },
];

export const HomeRecentWork = ({ highlights }: any) => {
 
  return (
    <section className="bg-neutral-100/75">
      <div className="mx-auto max-w-screen-xl py-20">
        <div className="flex flex-col items-center">
          <span className="heading-meta">Portfolio</span>
          <h2 className="pwe-heading">Recent Work</h2>
          <hr className="line line-hr-center" />
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          {highlights.map((highlight: any, index: number) => (
            <div key={index} className="w-full md:w-1/3 px-4">
              <RevealComponent index={index} variants={fadeBottomTop}>
                <div className="relative overflow-hidden h-[480px]">
                  <Image
                    src={highlight.coverPhoto}
                    className="duration-500 ease-in-out hover:scale-110 object-cover"
                    fill
                    alt=""
                  />
                </div>
                <div className="mt-6 flex flex-col gap-y-4">
                  <h5 className="text-center px-6  font-normal text-xl leading-8 duration-300 ease-in-out hover:text-roze">
                    <Link href={`/blog/${highlight.id}`}>
                      {introText[index].title}
                    </Link>
                  </h5>
                  <p className="text-center px-6">{introText[index].text}</p>
                </div>
              </RevealComponent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
