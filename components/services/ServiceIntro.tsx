import React from 'react'

export const ServiceIntro = ({data}: any) => {

  const {tag, title, paragraphs} = data;
  return (
    <div className='flex flex-wrap justify-start items-start gap-8'>
        <div className='w-full md:w-[26%]'>
         <span className="heading-meta text-roze uppercase tracking-[.25em]">{tag}</span>
            <h2>{title}</h2>
            <hr className="line line-hr-left" />
        </div>
        <div className='w-full md:w-[70%]'>
          {paragraphs?.map((paragraph: string, index: number) =>(
            <p key={index}>{paragraph}</p>
          ))}
           
        </div>
    </div>
  )
}

