import { Icon } from "@/components/ui/Icon";
import Image from 'next/image';

export const VideoItem = ({data}: any) => {
    const {id, img, src} = data;
  return (
    <div className="gallery-item cursor-pointer aspect-square overflow-hidden group relative" data-src={src}>                        
        <Image src={img}
             fill 
            alt="" 
            className='rounded-2xl object-cover' 
            sizes="(min-width: 1280px) 19.25rem, (min-width: 1024px) 20vw, (min-width: 768px) 23.25rem, (min-width: 640px) 20vw, 100vw"
            />
        <div className="absolute flex right-5 bottom-2 ">
            <Icon icon="playFilled" className="text-white h-10 w-10" />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gray-900 opacity-0 transition duration-300 group-hover:opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-roze opacity-70">
                <Icon icon="playFilled" className="text-white" />
            </div>
        </div>
</div>
  )
}
