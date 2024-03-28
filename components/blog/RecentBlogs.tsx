import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Widget } from '../ui/Widget';
import blogImg from '/public/images/blog1.jpg'

export const RecentBlogs = ({recentBlogs}: any) => {
  return (
    <Widget>
      <h6 className=' border-b border-gray-200 text-2xl font-normal pb-2'>Recent Posts</h6>
      <ul className='pt-5 flex flex-col gap-y-4'>
        {recentBlogs?.map((blog: any, index: number) =>(
             <li key={index}>
             <div className='flex gap-3'>
                 <Image src={blogImg} alt='' width={100} height={100}/>
                 <div className='flex flex-col'>
                   <Link href={''} className='text-[1rem]'>Samatha and Joe</Link>
                   <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                 </div>                  
             </div>             
         </li>
        ))}         
      </ul>
    </Widget>
  )
}
