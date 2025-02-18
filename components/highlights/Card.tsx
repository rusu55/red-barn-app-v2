import Image from "next/image"


export const Card = ({data}: any) => {
  return (
    <div className="shadow-xs rounded-sm max-w-[400px]  mx-auto w-[85%] min-h-[508px] bg-white flex flex-col items-center py-6">
                      <div className="rounded-full overflow-hidden h-[120px] aspect-square">
                                <Image src={`/images/${data.img}`}  width={120} height={120} alt="" className="object-cover h-[120px] w-[120px] duration-500 ease-in-out hover:scale-110"/>
                     </div>  
                        <h5 className="text-2xl mt-5 text-center">{data.title}</h5>                   
                        <h5 className="text-xl text-center">{data.subtitle}</h5>
                        <hr className="line-hr-left" />
                        <p className="text-center px-6">
                            {data.details}
                        </p>
                     
                </div>
  )
}

