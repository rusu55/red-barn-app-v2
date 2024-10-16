import Image from "next/image"
import img1 from '/public/images/prices/img-127.webp';
import img2 from '/public/images/prices/img-1130.webp';
import img5 from '/public/images/prices/img-954.webp';
import img8 from '/public/images/prices/img-515.webp';
export const PicturesGrid = () => {
  return (
    <div className='columns-2 gap-1 max-w-[700px] mx-auto space-y-1 pb-28 rounded-3xl overflow-hidden'>
        <div className='bg-gray-200 break-inside-avoid'>
            <Image src={img1} alt="" 
                sizes="24vw"
            />
        </div>
        <div className='bg-gray-200 break-inside-avoid'>
            <Image src={img5} alt="" sizes="24vw" />
        </div>
        <div className='bg-gray-200 break-inside-avoid'>
            <Image src={img2} alt=""  sizes="24vw"/>
        </div>
        <div className='bg-gray-200 break-inside-avoid'>
            <Image src={img8} alt="" sizes="24vw" />
        </div>
        
        
    </div>
  )
}

