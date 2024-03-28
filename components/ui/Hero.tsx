import React from 'react'

interface Props{
  image: any;
  title: string;
  description: string;
}

export const Hero = ({image, title, description} : Props) => {
  console.log(image)
  return (
    <div className='w-full bg-center bg-cover' style={{backgroundImage: `url(${image.src})`}}>
      <div className='flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-10 py-8 md:py-32'>
        <div className='w-[80%] md:max-w-lg bg-white py-9 px-7 text-center '>
            <span className='font-normal font-pariss text-xl'>Red Barn Wedding Studio</span>
            <hr className="line line-hr-center mx-auto" />
            <h1 className='text-2xl md:text-4xl pt-4'>Wedding Photography Cinematography</h1>
        </div>          
      </div>
    </div>
  )
}
