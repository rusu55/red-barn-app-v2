import Image from "next/image"

export const AboutIntro = ({image,...props}: any) => {
  return (
    <div className='max-w-screen-xl mx-auto flex flex-wrap justify-center'>
        {/* Block Text*/}
        <div className="w-full md:w-1/2 px-4">
            <div className="flex flex-col px-4 py-2">
                <span></span>
                <h2>Red Barn Wedding Studio</h2>
                <hr className='line line-hr-left'></hr>
                <p>A wedding, pre-wedding and fashion photographer based in central Europe.</p>
                <p>Mauris porttitor magna vel ante luctus convallis. Nunc at tellus erat. Donec et magni lectus. Aliquam egestas vel arcu id maximus. Orci varius natoque penatibus et mate dis parturient montes, nascetur ridiculus miss.</p>
                <p>Quisque efficitur nisi nec tellus fringilla posuere. Sed ut scelerisque tortor. Mauris maximus sollicitudin purus, sed fringilla lorem auctor eget. Interdum et malesuada duruthemes the miss a comp dresire ifames.</p>
                <p className="signature">Red Barn Wedding Studio</p>
            </div>                
        </div>
        {/* Block Image*/}
        <div className="w-full md:w-1/2 px-4">
            <div className='relative w-full'>
                 <div className='relative pt-4 pb-4 mb-8 max-w-[600px] img'>
                     <Image className='object-cover object-center h-full w-full duration-500 ease-in-out hover:scale-95'  src={image} alt=""  /> 
                </div>
            </div>
        </div>
    </div>
  )
}
