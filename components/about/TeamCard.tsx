import Image from "next/image";
import Link from "next/link";
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

export const TeamCard = ({member}: {member: TeamMember}) => {
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
          <span className="text-md font-thin text-roze">- {member.title}</span>
        </h3>
        {member.details.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {member.photography && member.photography.length > 0 ? (
          <>
            <span className="font-pariss text-lg font-bold">Check Portfolio: </span>
            {member.photography
              .sort((a, b) => Number(a.portfolioNo) - Number(b.portfolioNo))
              .map((portfolio, index) => (
                <Link key={index} href={`/blog/${portfolio.id}`} className="block text-base leading-relaxed text-roze underline">
                  {portfolio.title} ...
                </Link>
              ))}
          </>
        ) : (
          <p className="text-base text-roze underline">Portfolio coming soon!</p>
        )}
      </div>
    </div>
  </RevealComponent>
 )
}

