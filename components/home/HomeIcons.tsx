import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
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
                <p className='w-full md:w-[80%] pt-5'>Because every picture should be unique. Making your special day. We will make a wonderful story</p>
            </div>
            <div className='flex items-center gap-8'>
                    <Link href="https://www.theknot.com/marketplace/red-barn-wedding-studio-schaumburg-il-2027022"><Image src={tk} alt="" className='w-20 md:w-28 object-cover' /></Link>
                    <Link href="https://www.weddingwire.com/biz/red-barn-wedding-studio/776d90b9b48065a1.html"><Image src={ww} alt="" className='w-20 md:w-28 object-cover'/></Link>
                    <Link href="https://www.theknot.com/marketplace/red-barn-wedding-studio-schaumburg-il-2027022"><Image src={hf} alt="" className='w-20 md:w-28 object-cover'/></Link>
             </div>
           
        </div>
    </section>
  )
}

