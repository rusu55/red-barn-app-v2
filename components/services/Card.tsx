import Image from "next/image";
import { Icon } from "../ui/Icon";
import img1 from '/public/images/2.jpg';

export const Card = ({service}: any) => {
  return (
<div className="w-full">
   <div className="shadow-lg max-w-[450px] m-4 mx-auto w-[98%]">
        <div className="relative  overflow-hidden">
            <Image src={`/images/${service.img}`} width={500} height={200} alt="" className="duration-500 ease-in-out hover:scale-110 w-full"/>
            <div className="inline-block absolute right-4 bottom-4 bg-roze text-white px-4 py-2">
                <span className="text-xs antialiased tracking-wider">{service.type}</span>
            </div>
        </div>
        <div className="px-4">
            <h5 className="text-xl mt-5">{service.title}</h5>
            <hr className="line-hr-left" />
            <p>{service.highlights}</p>
            <ul className="pb-8">
                {service.details.map((detail: string, index: number) =>(
                        <li  key={index} className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />{detail}</li>
                ))}                       
            </ul>
        </div>
   </div>
   </div>
  )
}
