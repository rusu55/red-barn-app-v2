"use client";
import Image from "next/image";
import Link from "next/link";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import { RevealComponent } from "../ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";

interface Portfolio {
  id: string;
  title: string;
  portfolioNo: number;
}

interface TeamMember {
  name: string;
  title: string;
  role: string;
  photo: string;
  details: string[];
  photography?: Portfolio[];
  videography?: Portfolio[];
}

export const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <RevealComponent variants={fadeBottomTop}>
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6 md:items-center space-y-8 md:space-y-16">
        <div className="md:w-1/5 px-4">
          <div className="rounded-full overflow-hidden h-[180px] aspect-square">
            <Image
              className="object-cover h-[220px] w-[220px] duration-500 ease-in-out hover:scale-110"
              src={member.photo}
              alt={member.title}
              width={280}
              height={280}
            />
          </div>
        </div>
        <div className="pb-6 px-4 text-center md:text-left md:pl-10 w-full md:w-4/5">
          <h3 className="text-2xl pb-6">
            {member.name}{" "}
            <span className="text-md font-thin text-roze">
              - {member.title}
            </span>
          </h3>
          {member.details.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {member.photography && member.photography.length > 0 && (
            <>
              <span className="font-pariss text-lg font-bold">
                Check Portfolio:{" "}
              </span>
              {member.photography
                .sort((a, b) => Number(a.portfolioNo) - Number(b.portfolioNo))
                .map((portfolio, index) => (
                  <Link
                    key={index}
                    href={`/blog/${portfolio.id}`}
                    className="block text-base leading-relaxed text-roze underline"
                  >
                    {portfolio.title} ...
                  </Link>
                ))}
            </>
          )}
          {member.videography && member.videography.length > 0 && (
            <>
              <span className="font-pariss text-lg font-bold">
                Check Portfolio:{" "}
              </span>
              <LightGallery
                elementClassNames="w-full md:w-[50%] grid gap-y-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 2xl:gap-5 px-4"
                plugins={[lgVideo, lgZoom]}
                download={false}
              >
                {member.videography
                  .sort((a, b) => Number(a.portfolioNo) - Number(b.portfolioNo))
                  .map((portfolio, index) => (
                    <Link
                      key={index}
                      href={"#"}
                      className="block text-base leading-relaxed text-roze underline"
                    >
                      {portfolio.title} ...
                    </Link>
                  ))}
              </LightGallery>
            </>
          )}
        </div>
      </div>
    </RevealComponent>
  );
};
