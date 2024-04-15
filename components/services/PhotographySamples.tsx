import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RevealComponent } from "../ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";


export const PhotographySamples = ({highlights}: any) => {
  return (
    <section className="bg-neutral-100/75">
      <div className="mx-auto max-w-screen-xl py-20">
        <div className="flex flex-col items-center">
          <span className="heading-meta text-roze uppercase tracking-[.25em]">Wedding Photography</span>
          <h2 className="pwe-heading">Samples</h2>
          <hr className="line line-hr-center" />
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          {highlights.map((highlight: any, index: number) => (
            <div key={index} className="w-full md:w-1/3 px-4 relative">
              <RevealComponent index={index} variants={fadeBottomTop}>
                <div className="relative overflow-hidden h-[480px]">
                  <Image
                    src={highlight.coverPhoto}
                    className="duration-500 ease-in-out hover:scale-110 object-cover"
                    fill
                    alt=""
                  />
                </div>
                <div className="mt-6 flex flex-col gap-y-4 justify-center items-center">
                  <h5 className="text-center px-6  font-normal text-xl leading-8 duration-300 ease-in-out hover:text-roze  absolute top-10">
                    <Link href={`/blog/${highlight.id}`}>
                     Title
                    </Link>
                  </h5>
                  <p className="text-center px-6 absolute top-16">aaaa</p>
                </div>
              </RevealComponent>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
