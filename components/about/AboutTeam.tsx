import Image from "next/image";

import { RevealComponent } from "../ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";
import img1 from '/public/images/team/img1.webp';
import img2 from '/public/images/team/img2.webp';
import img3 from '/public/images/team/img3.webp';
import Link from "next/link";
import { TeamCard } from "./TeamCard";

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

interface AboutTeamProps {
    image: any;
    team: TeamMember[];
  }

export const AboutTeam = ({ image, team }: any) => {
    const roles = ["manager", "shooter", "editor", "photobooth"];
  
    return (
      <>
        {/* Intro Section */}
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6 py-10">
          <div className="w-full md:w-1/2 px-4">
            <div className="flex flex-col px-4 pb-8">
              <span className="uppercase text-md tracking-widest text-roze">Meet Our Team</span>
              <h2>Red Barn Wedding Studio</h2>
              <hr className="line line-hr-left" />
              <p>At Red Barn Wedding Studio, our cohesive team is the cornerstone of our success.</p>
              <p>
                Comprised of talented individuals who have honed their craft within our company for over a decade, our
                team&apos;s synergy is unmatched. With a deep understanding of each other&apos;s strengths and a shared
                passion for excellence, we seamlessly collaborate to deliver top-notch results for our clients.
              </p>
              <p>
                Our long-standing history together fosters a dynamic work environment where creativity flourishes,
                deadlines are met with precision, and client satisfaction is our ultimate goal.
              </p>
              <p>Trust in our experienced team at Red Barn Studios to bring your vision to life with unmatched professionalism and expertise.</p>
              <p>So without further ado, here are some of the team members behind our company.</p>
            </div>
          </div>
  
          {/* Image Grid */}
          <div className="w-full md:w-1/2 px-4 mt-20">
            <div className="w-full">
              <div className="grid grid-rows-2 grid-flow-col gap-2 items-center">
                <div className="row-span-2">
                  <Image className="object-cover rounded-lg md:h-[508px] duration-500 ease-in-out hover:scale-95" src={img3} alt="" />
                </div>
                <div>
                  <Image className="object-cover rounded-lg md:h-[255px] duration-500 ease-in-out hover:scale-95" src={img2} alt="" />
                </div>
                <div>
                  <Image className="object-cover rounded-lg md:h-[255px] duration-500 ease-in-out hover:scale-95" src={img1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Team Sections */}
        {roles.map((role, index) => {
          const filteredTeam = team.filter((member: any) => member.role === role);
          if (filteredTeam.length === 0) return null;
  
          return (
            <div key={index} className={`w-full py-10 md:py-20 ${role === "manager" || role === "editor" ? "bg-neutral-100/75" : "bg-white"}`}>
              {filteredTeam.map((member: any, idx: number) => (
                <TeamCard key={idx} member={member} />
              ))}
            </div>
          );
        })}
      </>
    );
  };