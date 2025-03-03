import Image from "next/image";

import { RevealComponent } from "../ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";
import img1 from '/public/images/team/img1.webp';
import img2 from '/public/images/team/img2.webp';
import img3 from '/public/images/team/img3.webp';
import Link from "next/link";

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
    image: string;
    team: TeamMember[];
  }

export const AboutTeam = ({image, team}: AboutTeamProps) => {
    const managers = team.filter((team: any)=> team.role === 'manager')
    const shooters = team.filter((team: any) => team.role ==="shooter")
    const editors = team.filter((team: any) => team.role === "editor")
    const photobooth = team.filter((team: any) => team.role === "photobooth")
    //console.log(manager)
    const roles = ["manager", "shooter", "editor", "photobooth"];
    return (
        <>
            <div className='max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6 py-10'>
                 {/* Block Text*/}
                 <div className="w-full md:w-1/2 px-4">
                    <div className="flex flex-col px-4 pb-8">                    
                        <span className="uppercase text-md tracking-widest  text-roze">Meet Our Team</span>
                        <h2>Red Barn Wedding Studio</h2>                   
                        <hr className='line line-hr-left'></hr>                    
                        <p>At Red Barn Wedding Studio, our cohesive team is the cornerstone of our success.</p>
                        <p>Comprised of talented individuals who have honed their craft within our company for over a decade, our team&apos;s synergy is unmatched. With a deep understanding of each other&apos;s strengths and a shared passion for excellence, we seamlessly collaborate to deliver top-notch results for our clients.</p>
                        <p>Our long-standing history together fosters a dynamic work environment where creativity flourishes, deadlines are met with precision, and client satisfaction is our ultimate goal.</p>
                        <p>Trust in our experienced team at Red Bank Studios to bring your vision to life with unmatched professionalism and expertise.</p>
                        <p>So without further due, here are some of the team members behind our company</p>                        
                    </div>                
                </div>
                 {/* Block Image*/}
                <div className="w-full md:w-1/2 px-4 mt-20">
                <div className='w-full'>
                    <div className='grid grid-rows-2 grid-flow-col gap-2 items-center'>
                      <div className="row-span-2">
                        <Image className='object-cover rounded-lg md:h-[508px] duration-500 ease-in-out hover:scale-95'  src={img3} alt=""  /> 
                      </div>
                      <div>
                        <Image className='object-cover rounded-lg md:h-[255px] duration-500 ease-in-out hover:scale-95'  src={img2} alt=""  /> 
                      </div>
                      <div>
                        <Image className='object-cover rounded-lg md:h-[255px] duration-500 ease-in-out hover:scale-95'  src={img1} alt=""  /> 
                      </div>                       
                    </div>
                </div>
                </div>
            </div>
            <div className="w-full bg-neutral-100/75 py-10 md:py-20">
                            {managers.map((manager:any, index: number) =>{
                                return(
                                    <RevealComponent key={index} index={index} variants={fadeBottomTop}>
                                    <div key={index} className="max-w-screen-xl mx-auto flex flex-wrap  px-2 md:px-6 md:items-center justify-center md:space-y-16 space-y-8">
                                        
                                            <div className="md:w-1/5 md:px-4">                       
                                                <div className="rounded-full overflow-hidden h-[180px] aspect-square">
                                                    <Image className='object-cover  h-[240px] w-[240px] duration-500 ease-in-out hover:scale-110'  src={manager.photo} alt="wedding photographer" width={280} height={280} />
                                                </div>
                                            </div>
                                            <div className="pb-6 px-4 text-center md:text-left md:pl-10 w-full md:w-4/5">
                                                    <h3 className=" text-2xl pb-6 pt-4 md:pt-0">{manager.name}  <span className="text-md  font-thin text-roze">- {manager.title}</span></h3>
                                                    {manager.details?.map((paragraph: string, index: number) => (
                                                        <p key={index}> {paragraph }</p>
                                                    ))} 
                                                    <span className=" font-pariss text-lg font-bold ">Check Portfolio: </span>
                                                    
                                                    {manager.photography.length > 0 ? (
                                                                                                                
                                                        manager.photography
                                                        .sort((a: any, b:any) => Number(a.portfolioNo) - Number(b.portfolioNo))
                                                        .map((portfolio: any, index: number) => (
                                                            <Link key={index} href={`/blog/${portfolio.id}`} className="block leading-relaxed text-base text-roze underline ">{portfolio.title} ...</Link>
                                                        ))
                                                        
                                                    ) : (<p className="text-base text-roze underline">Portfolio comming soon!</p>)} 
                                                                                 
                                            </div>                                           
                                                
                                                      
                                    </div>
                                    </RevealComponent>
                                )
                            })}                
            </div>
            <div className="w-full bg-white py-10 md:py-10 ">  
                {shooters.map((shooter: any, index: number) =>(
                             <RevealComponent  key={index} index={index} variants={fadeBottomTop}>
                            <div key={index} className="max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6 md:items-center  md:space-y-16 space-y-8">
                                <div className=" md:w-1/5 px-4">                       
                                    <div className="rounded-full overflow-hidden h-[180px] aspect-square">
                                        <Image className='object-cover  h-[220px] w-[220px] duration-500 ease-in-out hover:scale-110'  src={shooter.photo} alt="photo and video" width={280} height={280}  />
                                    </div>
                                </div>
                                <div className="pb-6 px-4 text-center md:text-left md:pl-10 w-full md:w-4/5">
                                        <h3 className=" text-2xl pb-6">{shooter.name} <span className="text-md  font-thin text-roze">-  {shooter.title}</span></h3>
                                        
                                        {shooter.details.map((paragraph: string, index: number) => (
                                                        <p key={index}> {paragraph }</p>
                                                    ))} 
                                         <span className=" font-pariss text-lg font-bold ">Check Portfolio: </span>
                                                    {shooter.photography.length > 0 ? (
                                                        shooter.photography
                                                        .sort((a: any, b:any) => Number(a.portfolioNo) - Number(b.portfolioNo))
                                                        .map((portfolio: any, index: number) => (
                                                            <Link key={index} href={`/blog/${portfolio.id}`} className="block text-base leading-relaxed text-roze underline ">{portfolio.title} ...</Link>
                                                        ))
                                                        
                                                    ) : (<p className="text-base text-roze underline">Portfolio comming soon!</p>)} 
                                </div>    
                            </div> 
                            </RevealComponent>
                ))}
             </div>                  
                            
            <div className="w-full bg-neutral-100/75 py-10 md:py-20 mt-10 ">
                {editors.map((editor: any, index: number) =>(
                     <RevealComponent  key={index} index={index} variants={fadeBottomTop}>
                        <div key={index} className="max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6 items-center md:space-y-16 space-y-8 ">
                                <div className="md:w-1/5 px-4">                       
                                <div className="rounded-full overflow-hidden h-[180px] aspect-square">
                                    <Image className='object-cover  h-[220px] w-[220px] duration-500 ease-in-out hover:scale-110'  src={editor.photo} alt="editor"  width={280} height={280} />
                                </div>
                            </div>
                            <div className="pb-6 pl-10 w-full md:w-4/5">
                                    <h3 className="pb-6 px-4 text-center md:text-left md:pl-10 w-full md:w-4/5">{editor.name}  <span className="text-md  font-thin text-roze">-  Editor</span></h3>
                                    {editor.details.map((paragraph: string, index: number) => (
                                        <p key={index}> {paragraph}</p>
                                    ))}
                                    
                            </div>    
                         </div>
                         </RevealComponent>
                ))}                   
            </div>          
            <div className="w-full bg-white py-10 md:py-10 ">  
                {photobooth.map((employee: any, index: number) =>(
                    <RevealComponent  key={index} index={index} variants={fadeBottomTop}>
                            <div key={index} className="max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6 items-center  md:space-y-16 space-y-8 ">
                                <div className=" md:w-1/5 px-4">                       
                                    <div className="rounded-full overflow-hidden h-[180px] aspect-square">
                                        <Image className='object-cover  h-[220px] w-[220px] duration-500 ease-in-out hover:scale-110'  src={employee.photo} alt="photo and video" width={280} height={280}  />
                                    </div>
                                </div>
                                <div className="pb-6 pl-10 w-full md:w-4/5">
                                        <h3 className="pb-6 px-4 text-center md:text-left md:pl-10 w-full md:w-4/5">{employee.name} <span className="text-md  font-thin text-roze">-  {employee.title}</span></h3>
                                        
                                        {employee.details.map((paragraph: string, index: number) => (
                                                        <p key={index}> {paragraph }</p>
                                                    ))} 
                                </div>    
                            </div> 
                    </RevealComponent>
                ))}
             </div>       
        </>
    )
}