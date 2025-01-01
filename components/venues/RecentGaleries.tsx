

import Image from "next/image";
import Link from "next/link";
import _ from "lodash";

import { RevealComponent } from "../ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";


export const RecentGaleries = ({ galleries }: any) => {
 
  return (
    <section className="bg-neutral-100/75">
      <div className="mx-auto max-w-screen-xl py-20">
        <div className="flex flex-col items-center">          
          <h2 className="pwe-heading text-center md:text-left">Our Wedding Photography from this Venue </h2>
          <hr className="line line-hr-center" />
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          {galleries.map((gallery: any, index: number) => (
            <div key={index} className="w-full md:w-1/3 px-4">
              <RevealComponent index={index} variants={fadeBottomTop}>
                <div className="relative overflow-hidden h-[280px] rounded-lg">
                <Link href={`/blog/${gallery.id}`}>
                  <Image
                    src={gallery.photos[0]}
                    className="duration-500 ease-in-out hover:scale-110 object-cover"
                    fill
                    alt="Wedding Photography Chicago"
                    sizes="(min-width: 1360px) 395px, (min-width: 780px) 29.82vw, calc(100vw - 32px)"
                  />
                  </Link>
                </div>
                <div className="mt-4 flex flex-col gap-y-1">
                  <h5 className="text-center px-2  font-normal text-xl leading-8 duration-300 ease-in-out hover:text-roze">
                    <Link href={`/blog/${gallery.id}`}>
                      {gallery.title}
                    </Link>
                  </h5>
                  <p className="text-center px-2">{_.truncate(gallery.description, {length:140})}</p>
                </div>
              </RevealComponent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
