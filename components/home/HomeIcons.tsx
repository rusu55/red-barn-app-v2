
import Image from 'next/image';
import Link from 'next/link';

import { RevealComponent } from '../ui/RevealComponent';
import { fadeTopBottom } from '@/lib/animation';
import tk from '/public/images/tk_badge.png';
import ww from '/public/images/weddingwire_badge.png';
import hf from '/public/images/tk_halloffame.png'


export const HomeIcons = () => {

  return (
    <section className="my-16">      
        <div className="mx-auto max-w-screen-xl flex flex-wrap justify-center">
            <div className='w-full px-4 md:w-1/3'>
                <h2>Check our reviews on:</h2>
                <hr className="line line-hr-center"></hr>
                <p className='w-full md:w-[80%] pt-5'>Reviews are a reflection of the work we do, echoing the love stories and family memories we celebrate.</p>
            </div>
            <div className='flex items-center gap-8'>
                <RevealComponent index={1} variants={fadeTopBottom}>
                    <Link href="https://www.theknot.com/marketplace/red-barn-wedding-studio-schaumburg-il-2027022"><Image src={tk} alt="" className='w-20 md:w-28 object-cover duration-500 ease-in-out hover:scale-105' /></Link>
                </RevealComponent>
                <RevealComponent index={2} variants={fadeTopBottom}>
                    <Link href="https://www.weddingwire.com/biz/red-barn-wedding-studio/776d90b9b48065a1.html"><Image src={ww} alt="" className='w-20 md:w-28 object-cover duration-500 ease-in-out hover:scale-105'/></Link>
                </RevealComponent>
                <RevealComponent index={3} variants={fadeTopBottom}>
                    <Link href="https://www.theknot.com/marketplace/red-barn-wedding-studio-schaumburg-il-2027022"><Image src={hf} alt="" className='w-20 md:w-28 object-cover duration-500 ease-in-out hover:scale-105'/></Link>
                </RevealComponent>
             </div>           
        </div>       
    </section>
  )
}

