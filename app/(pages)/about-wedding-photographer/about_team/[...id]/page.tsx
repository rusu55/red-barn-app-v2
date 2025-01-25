
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { Hero } from "@/components/ui/Hero";
import hero_img from "/public/images/about.jpg";
import { RevealComponent } from "@/components/ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";
import Link from "next/link";
import { RenderHTML } from "@/lib/render-html"

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {

const id = params.id
const portfolioQuery = await fetch(`http://localhost:3000/api/shooter/${id}`).then((res) => res.json())



return {
    title: `Chicago Wedding Photographer : ${portfolioQuery[0].name}`,
    description: `Red Barn Wedding Studio brigs the best Wedding Photographers and Videographers: ${portfolioQuery[0].name}`,
    openGraph:{
      images: [
        {
          url: portfolioQuery[0].photography[0].photos[0]
        }
      ]
    },
   // other: {
    // 'script:ld_json': JSON.stringify(structuredData)
   // },
  };
}

const ShooterPortfolio = async ({params}: any) => {

const id = params.id;
const portfolioQuery = await fetch(`http://localhost:3000/api/shooter/${id}`).then((res) => res.json())

const portfolio = portfolioQuery || [];
const {name, title, details, photo, photography, videography} = portfolio[0]


  return (
    <div className="pt-20 md:pt-0">
      <Hero image={hero_img} title="Wedding Photographer in Chicago" description="" />
      <div className="mx-auto max-w-screen-xl py-20 flex flex-wrap justify-center gap-y-12">
              {/** Left Section */}
              <div
                className="w-full px-4 lg:w-[52%]  order-2 lg:order-1"
                key={Math.random()}
              >              
                  {photography?.map((item: any, index: number) =>(
                    <RevealComponent key={index} index={index} variants={fadeBottomTop}>                
                      <div className="relative overflow-hidden place-self-center">                        
                          <Link href={`/blog/${item.id}`}>
                          
                            <Image
                              src={item.photos[0]}
                              width={740}
                              height={400}
                              alt=""
                              className="duration-500 ease-in-out hover:scale-110"
                            />
                           
                          </Link>
                          <span className="mt-6 uppercase text-xs tracking-widest  text-roze">
                            {item?.postType} Photography
                          </span>
                          <Link href={`blog/${item.id}`}>
                            <h5 className="text-[1.6rem] mt-2">{item.title}</h5>
                          </Link>
                          {item.description !== "" && (
                            <div className="mt-4"><RenderHTML htmlContent= {item.description} /></div>
                          )}
                          <span className="text-right text-sm text-roze mb-12 md:pr-14 inline-block w-full underline">
                            <Link href={`/blog/${item.id}`}>See more photos...</Link>
                          </span>
                    </div>
                    </RevealComponent>  
                  ))}
              
              </div>
              {/** Right Section */}
              <div className="w-full px-4 lg:w-[45%] flex flex-col gap-y-6 order-1 lg:order-2">
                <div className="flex flex-col items-center gap-y-4">                       
                       <div className="rounded-full overflow-hidden h-[180px] aspect-square">
                            <Image className='object-cover  h-[240px] w-[240px] duration-500 ease-in-out hover:scale-110'  src={photo} alt="wedding photographer" width={280} height={280} />
                      </div>
                      <div className="px-4 text-center md:text-left md:pl-10 w-full md:w-4/5   bg-neutral-100/75 py-8">
                           <h3 className=" text-2xl pb-6 pt-4 md:pt-0 text-center">{name}  <span className="text-md  font-thin text-roze">- {title}</span></h3>
                                       {details?.map((paragraph: string, index: number) => (
                                        <p key={index}> {paragraph }</p>
                                     ))}  
                                                         
                      </div>    
                 </div>
              </div>
            </div>
    </div>
  )
}
export default ShooterPortfolio