import Image from "next/image";
import Link from "next/link";
import { RevealComponent } from "../ui/RevealComponent";

import { fadeTopBottom } from "@/lib/animation";
import Maks from "/public/images/Maks.jpg"

export const AboutTeam = ({image,...props}: any) => {
    return (
        <>
            <div className='max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6'>
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
                    <div className='relative w-full'>
                        <div className='relative pt-4 pb-4 mb-8 max-w-[600px] img'>
                            <Image className='object-cover object-center h-full w-full duration-500 ease-in-out hover:scale-95'  src={image} alt=""  /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-neutral-100/75 py-10 md:py-20">
                <div className="max-w-screen-xl mx-auto grid gap-y-8 sm:gap-6 lg:grid-cols-3 lg:gap-12 2xl:gap-12">
                       <div className="flex flex-col gap-y-4">
                            <div>
                                <Image className='object-cover object-center h-full w-full duration-500 ease-in-out hover:scale-95'  src={Maks} alt=""  />
                            </div>
                            <div>
                                <h3 className=" text-2xl">Maks</h3>
                                <span className="uppercase text-md tracking-widest  text-roze">Photographer</span>
                                <p>Maks is one of our main photographers. He loves photographing weddings, street photography, and landscapes.</p>
                                <p>In his free time, he enjoys a nice ride in the world as well as some delicious food.</p>
                            </div>
                       </div> 

                       <div className="flex flex-col gap-y-4">
                            <div>
                                <Image className='object-cover object-center h-full w-full duration-500 ease-in-out hover:scale-95'  src={Maks} alt=""  />
                            </div>
                            <div>
                                <h3 className=" text-2xl">Maks</h3>
                                <span className="uppercase text-md tracking-widest  text-roze">Photographer</span>
                                <p>Maks is one of our main photographers. He loves photographing weddings, street photography, and landscapes.</p>
                                <p>In his free time, he enjoys a nice ride in the world as well as some delicious food.</p>
                            </div>
                       </div> 

                       <div className="flex flex-col gap-y-4">
                            <div>
                                <Image className='object-cover object-center h-full w-full duration-500 ease-in-out hover:scale-95'  src={Maks} alt=""  />
                            </div>
                            <div>
                                <h3 className=" text-2xl">Maks</h3>
                                <span className="uppercase text-md tracking-widest  text-roze">Photographer</span>
                                <p>Maks is one of our main photographers. He loves photographing weddings, street photography, and landscapes.</p>
                                <p>In his free time, he enjoys a nice ride in the world as well as some delicious food.</p>
                            </div>
                       </div> 
                </div>
            </div>
        </>
    )
}