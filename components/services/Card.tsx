import Image from "next/image";
import { Icon } from "../ui/Icon";
import img1 from '/public/images/2.jpg';

export const Card = () => {
  return (
   <div className="shadow-lg max-w-[450px] mt-10 mx-auto">
        <div className="relative  overflow-hidden">
            <Image src={img1} alt="" className="duration-500 ease-in-out hover:scale-110 w-full"/>
            <div className="inline-block absolute right-4 bottom-4 bg-roze text-white px-4 py-2">
                <span className="text-xs antialiased tracking-wider">Wedding Photography</span>
            </div>
        </div>
        <div className="px-4">
            <h5 className="text-xl mt-5">Wedding Day Coverage</h5>
            <hr className="line-hr-left" />
            <p>This package is intended to capture you and your partner’s story and aesthetic. Quisque efficitur nines tellus fringilla posuere.</p>
            <ul className="pb-8">
                <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" /> 10 Hours Photography Coverage</li>
                <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" /> Protected Online Wedding Gallery</li>
                <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" /> Full Copyright release for all images</li>
                <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" /> Free USB with all Wedding Pictures</li>
                <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" /> Prewedding Consultation to discuss wedding timeline</li>
            </ul>
        </div>
   </div>
  )
}
