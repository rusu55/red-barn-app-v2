'use client';
import Script from 'next/script'
import { Hero } from "@/components/ui/Hero";
import Image from "next/image";
import aboutImage from "/public/images/about-hero.webp";
import Img1  from '/public/images/album1.jpeg'
import Img2 from '/public/images/album2.jpeg'
import Img3 from '/public/images/album3.jpg'
import Img4 from '/public/images/album4.jpeg'
import Img5 from '/public/images/album5.jpeg'
import Img6 from '/public/images/album6.jpeg'
import Img7 from '/public/images/album7.jpeg'
import Img8 from '/public/images/album8.jpeg'

const AlbumPage = () => {
  return (
    <div className="pt-20 md:pt-0">
      <Hero image={aboutImage} title={""} description={""} />
      <div className='max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6'>
            <div className="w-full px-4 mt-10">
                <div className="flex flex-col px-4 pb-4">                    
                    <span className="uppercase text-md tracking-widest  text-roze">Album Design</span>
                    <h2>Album Instructions...</h2>                   
                    <hr className='line line-hr-left'></hr>                    
                    <p>For your album, please select a range of 100 to 120 images (no more than that). In the album will go between 80 to max 100 images. We ask for more pictures so we can play and match them on the layout of the album.</p>
                    <p>The details of the images that you should select are listed below.</p>
                </div> 
                <div className="flex flex-col px-4 pb-4">
                    <h2 className="text-2xl">Here are some tips on how to select your images.</h2>
                    <p className="pt-4">1. Start with a cover image that is meaningful and appropriate. ( ONLY for the cover album upgrades. All our package albums come with leather cover, but can be upgraded to Acrylic or Metallic Cover).<br />
                    2. Include several photos of the details.<br />
                    3. Include photos that show both action and reaction.<br />
                    4. Be consistent with photos of family within the general flow of the album...<br />
                    5. Don&apos;t choose photos that won&apos;t fit with any other pictures.<br />
                    6 . Trust your photographer&apos;s judgment about color vs. black and white.</p>
                </div>
                <div className="flex flex-col px-4 pb-4">
                    <h2 className="text-2xl">1. Start with a cover image that is meaningful and appropriate.</h2>
                    <p className="pt-4">( <strong>ONLY</strong> for the cover album upgrades! All our package albums come with leather cover, but can be upgraded to Acrylic or Metallic Cover).</p>
                    <p>
                    If your album will have a photo on the cover, don&apos;t forget to specify which photo you want to be there. I recommend that you choose a portrait of the two of you, but some candid moments work well, too. If your cover will have a small inset photo, the best choices are simple images that will look good in a small size. Make sure the colors in the photo will look good with the color that you&apos;ve chosen for the cover material. If your album will have a full photo cover, you can choose an image with more detail, because it will be larger and easier to see.
                    </p>
                    <div className='w-full flex justify-center pt-6'>
                        <Image src={Img1} alt="album" width="966" className='w-[966px] h-[400px] overflow-hidden object-cover'/>
                    </div>
                    
                   <p className='pt-8'>
                   As standard all our albums come with a black leather cover. We offer as upgrades: photo cover, crystal covers, metal and canvas. Small inserts are available as well. Please make sure to check out our Product brochure and our Album options post to see all the available upgrades your book can have.
                   </p>
                </div>
                   <div className="flex flex-col px-4 pb-4">
                        <h2 className="text-2xl">2. Include several photos of the details.</h2>
                        <p className="pt-4">
                            Detail photos reveal a lot of information about the theme, mood, and appearance of your wedding day. Be sure to select related sets of detail pictures, so they can be grouped together in the book. If you choose one picture of a bouquet or centerpiece, and no other details, it&apos;s difficult to find a place to put those pictures within the album.I like to start with getting-ready details before the ceremony. A layout of ceremony details is a great way to introduce that part of the day.
                        </p>
                        <div className='w-full flex justify-center pt-6'>
                            <Image src={Img2} alt="album" width={966} height={483}/>
                        </div>
                        
                        <p className='pt-6'>
                         Some of the most beautiful details are found at the reception, so be sure to include several of those photos.
                        </p>
                        <div className='w-full flex justify-center pt-6'>
                            <Image src={Img3} alt="album" width={966} height={483}/>
                        </div>
                   </div>
                   <div className="flex flex-col px-4 pb-4 pt-6">
                         <h2 className="text-2xl">3. Include photos that show both action and reaction.</h2>
                         <p className="pt-4">
                             This is also my philosophy when taking photographs. The story is best told by documenting the main events that occur, along with people&apos;s reactions to those events. It&apos;s worth the cost of extra album photos to tell the complete story. When the groom sees the bride for the first time, be sure
                         </p>
                         <div className='w-full flex justify-center pt-6'>
                            <Image src={Img4} alt="album" width={966} height={483}/>
                        </div>
                         <p className='pt-6'>
                         to include pictures of her arrival as well as the look on his face when he sees her. During the toasts, be sure to include not only the speakers, but also the people laughing or crying in response. By looking at these example photos, you can tell that the speeches were hilarious, which gives a lot of information about the story of the day. Instead of showing only the father daughter dance and the mother-son dance, include a photo of the bride&apos;s mother crying as she watches. Her tears reveal a lot about the closeness of their family.
                         </p>
                   </div>
                   <div className="flex flex-col px-4 pb-4">
                        <h2 className="text-2xl">4. Be consistent with photos of family within the general flow of the album.</h2>
                        <p className="pt-4">
                            Try to choose a fairly even mix of pictures of both sides of the family, but keep consistent with the major events of the day. The most common mistake I see in photo selection is that people choose photos of family that don&apos;t fit into the events of the day. Lots of my clients will count photos of their family and try to keep that equal, instead of considering how those photos will fit into the album. (For example, “I have four photos of my mom, and four photos of his mom in the book. So it&apos;s equal.”) But make sure that you choose the right timing of the day to keep these photos truly equivalent.
                        </p>
                        <div className='w-full flex justify-center pt-6'>
                            <Image src={Img5} alt="album" width={966} height={483}/>
                        </div>
                        <p className='pt-6'>
                        For example, if you include a picture of the father-daughter dance, definitely include one of the mother-son dance. Often people will omit one or the other, choosing instead to use a different photo of their parent later in the reception. Although that might seem equal when you are counting photos of individual people (“four photos of mom”), it doesn&apos;t make sense because you have eliminated an important event in the day. Showing the father-daughter dance without the mother-son dance is not an equal distribution of family photos, no matter what the overall count may be.<br />
                        My advice: Don&apos;t count photos of people. Include important moments and tell the story. The same concept applies to other events of the day. For example, if three people give speeches, include photos of all three of them. Even if there is a better photo of your best man from a different part of the day, don&apos;t leave him out of the speech photos. He worked hard on that toast.<br />
                        When choosing family formals, be consistent between families. In this example, each page shows a photo of the bride or groom with the parents, and then a full family photo with siblings. It doesn&apos;t matter which formals you want to include, but do make them consistent between families.<br/>
                        In this example of wedding party photos, the bride and groom selected a relaxed group picture of the ladies, and then a similarly relaxed one of the guys laughing. Be consistent between groups.
                        </p>
                        <div className='w-full flex justify-center pt-6'>
                            <Image src={Img6} alt="album" width={966} height={483}/>
                        </div>
                   </div>
                   <div className="flex flex-col px-4 pb-4 pt-6">
                    <h2 className="text-2xl">5. Don&apos;t choose photos that won&apos;t fit with any other pictures.</h2>
                    <p className="pt-4">
                        Another common mistake that I see are pictures that aren&apos;t chosen as part of a group of related images. For example, if you choose several photos of the ladies getting ready, and only one of the guys getting ready, it will have to go on its own page by itself. That one photo won&apos;t belong with any others in the book.<br />
                        I often see people choosing one candid photo that occurs during the formal portraits. Those pictures are especially difficult to fit in the book. Typically the pages before the formals are the ceremony, and the pages after the formals are the portraits of the bride and groom. If there is one picture of a bridesmaid laughing during the formals, I don&apos;t know where to put it.
                    </p>
                   </div>
                   <div className="flex flex-col px-4 pb-4">
                        <h2 className="text-2xl">6. Trust your photographer&apos;s judgment about color vs. black and white.</h2>
                        <p className="pt-4">
                            It&apos;s not desirable to mix color and b/w photos on the same page, because it&apos;s distracting to the eye and doesn&apos;t flow together well. If your photographer wants to have a page that is all black and white, it is probably done with very good reason. The photo on the right was originally black and white, but it looks much better in this layout as color. Don&apos;t be alarmed if your photographer changes it for the sake of the album.
                        </p>
                        <div className='w-full flex justify-center pt-6'>
                            <Image src={Img7} alt="album" width={966} height={483}/>
                        </div>
                   </div>
                   <div className="flex flex-col px-4 pb-4 pt-6">
                        <h2 className="text-2xl">7. Choose a closing photo for the last page.</h2>
                        <div className='w-full flex justify-center pt-6'>
                            <Image src={Img8} alt="album" width={966} height={483}/>
                        </div>
                        <p className="pt-6">
                            Think of how you want to end the story of your wedding, and be sure to include a photo for that purpose.
                        </p>
                        <p>
                            The most important things to remember:
                        </p>
                        <p>
                        1. Your album is a book that tells a story. Select photos that include the important moments and tell the complete story.<br/>
                        2. Your album is an art piece. Select photos that you find beautiful.<br />
                        3. Your album is a family heirloom. Select photos that will be important to you and your family many years from now.
                        </p>
                        <p>
                        That being said, we look forward in seeing your selection.
                        </p>
                        <h2 className="w-full text-xl text-center pt-4">
                        YOU CAN SEND US YOUR SELECTION BY UPLOADING THE IMAGES ON THE WINDOW BELLOW
                        </h2>
                   </div>
                   <div id="FilemailUploadWrap" className='w-[90%]'></div><Script type="text/javascript" src="//www.filemail.com/js/widgets/uploadIntegrator2.js?companyid=2760644959&wrapId=FilemailUploadWrap"/>       
            </div>           
      </div>
    </div>
  )
}

export default AlbumPage