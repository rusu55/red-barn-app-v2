import React from 'react'
import Image from 'next/image';
import tk from '/public/images/tk_badge.png';
import ww from '/public/images/weddingwire_badge.png';
import hf from '/public/images/tk_halloffame.png'

export const HomeIcons = () => {
  return (
    <section className="my-16">
        <div className="mx-auto max-w-screen-xl flex flex-wrap justify-center">
            <div className='w-1/3'>
                <h2>Check our reviews on:</h2>
                <hr className="line line-hr-center"></hr>
                <p className='w-[80%] pt-5'>Because every picture should be unique. Making your special day. We will make a wonderful story</p>
            </div>
            <div className='flex items-center gap-8'>
                    <Image src={tk} alt="" width={120}/>
                    <Image src={ww} alt="" width={110}/>
                    <Image src={hf} alt="" width={120}/>
             </div>
           
        </div>
    </section>
  )
}

