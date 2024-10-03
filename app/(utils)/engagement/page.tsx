import { Hero } from "@/components/ui/Hero";
import Image from "next/image";
import aboutImage from "/public/images/about-hero.webp";
import Img1  from '/public/images/engagement-1.jpeg'
import Img2 from '/public/images/engagement-2.jpeg'
import Img3 from '/public/images/engagement-3.jpeg'
import Img4 from '/public/images/engagement-4.jpeg'

const EngagementPage = () => {
  return (
    <div className="pt-20 md:pt-0">
         <Hero image={aboutImage} title={""} description={""} />
         <div className='max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6'>
            <div className="w-full px-4 mt-10">
                <div className="flex flex-col px-4 pb-4">                    
                    <span className="uppercase text-md tracking-widest  text-roze">TIPS FOR </span>
                    <h1>Engagement Session</h1>                   
                    <hr className='line line-hr-left'></hr>                    
                    <p>An Engagement shoot is so important for so many reasons in the run up to your wedding.</p>
                    <p>It is a great way to spend some quality time together before the big day, it helps you and your photographer get to know each other and talk about the final plans for your wedding, it allows you to get some stunning images of you both as a couple, but most importantly it allows you to practice in front of the camera before your big day meaning you will be sure to get rid of any nerves!</p>
                    <div className='w-full flex justify-center pt-6'>
                        <Image src={Img1} alt="album" width="966" className='w-[966px] h-[480px] object-none object-right-bottom'/>
                    </div>
                </div> 
                <div className="flex flex-col px-4 pb-4 pt-8">
                  <h2 className="text-2xl">1. Location</h2>
                  <p className="pt-4">
                     Go somewhere that is meaningful to you as a couple, but also has a variety of backdrops to make things more exciting and give you real variety in the images. City centres, villages, fields, beaches, farms, lakes, rivers all make fabulous backdrops so think of somewhere unique to you!
                  </p>
                  <p>
                     Also... It is a good idea to think seasonally. If your shoot is in the autumn, why not take advantage of the amazing red and orange trees; in the winter you could do your shoot in the snow; spring in the daffodils or rape seed fields; or in the summer, the lavender fields or beach
                  </p>
                  <p>
                    Villages and towns can provide some great quirky backgrounds, eclectic or antique shops, colourful doorways and old brickwork look great. If you have an amazing home or perhaps are hiring a really special bridal suite, this can make a great place for some more intimate shots... Of course, the beach is always fantastic especially if there is variety: old groins, colourful beach huts and long grasses in the dunes.
                  </p>
                  <p>
                  Think about your history as a couple…if you met in Starbucks, start the shoot there over a cup of coffee !
                  </p>
                </div>
                <div className="flex flex-col px-4 pb-4">
                  <h2 className="text-2xl">2. Activities</h2>
                  <p className="pt-4">
                  Activities are fabulous in engagement shoots, they give you something fun and natural to do while making the shoot individual and interesting. You could hire a rowing boat on a local lake; go horse riding, if you have a horse; does your dad have a vintage car you could borrow for a country drive or how about a vintage camper, you could visit an antique market; hire a tandem bike, or how about a picnic or trip strawberry picking?
                   </p>
                    <p>
                    Fruit fields look fabulous and strawberry picking is a great activity that is fun and looks very cute in the images. Take a picnic to the woods or beach for some really romantic shots. Ice creams are very English, and again... any experience you can be seen sharing makes the images really romantic.
                    </p>
                    <div className='w-full flex justify-center pt-6'>
                            <Image src={Img2} alt="album" width="966" className='w-[966px] h-[480px] object-none object-right-bottom'/>
                    </div>
                </div>

                <div className="flex flex-col px-4 pt-8">
                  <h2 className="text-2xl">3. Hobbies & Pets</h2>
                    <p className="pt-4">
                    Incorporating hobbies is another way to make your shoot personal to you as a couple. Obviously Zumba and squash might not work but both in cute golf outfits out on the course, boating or perhaps cycling (think vintage bikes with baskets) are great ideas.
                   </p>
                    <p>
                    If you have a pet, this is something we could incorporate too... They are after all part of your little family!  Bringing your dog along will be sure to make it a fun experience!
                    </p>
                </div>

                <div className="flex flex-col px-4 pt-8">
                  <h2 className="text-2xl">4. Hair & MakeUp</h2>
                    <p className="pt-4">
                     You really want to look and feel at your very best on your engagement shoot!
                     </p>
                    <p>
                    If you are a bit of a makeup / hair novice why not arrange to have them done professionally. Pop into your local salon or head to a blow dry bar. Perhaps you could even arrange your wedding hair and / or makeup trials for the morning of your shoot?
                    </p>
                    <p>
                    If you&apos;re doing your hair and make up yourself take a little extra time, perhaps buy some new items to make you feel great and remember to wear a little more makeup than usual while still keeping it fairly natural as makeup doesn&apos;t show up as much on the photos.
                    </p>
                    <div className='w-full flex justify-center pt-6'>
                            <Image src={Img3} alt="album" width="966" className='w-[966px] h-[480px] object-none object-middle'/>
                    </div>
                </div>

                <div className="flex flex-col px-4 pt-8">
                  <h2 className="text-2xl">5. Clothing</h2>
                    <p className="pt-4">
                    Choose colors that go together and keep the same color palette as this will unify you together in the shots. I also think it is important to wear color rather than blacks and whites  or grays which can look harsh as color really lifts your photographs.
                    </p>
                    <p>
                    Think about where we are shooting and choose appropriate clothes: if we are in the fields, in winter - wellies hats and scarves; or on the beach, in summer - think sun dress and flip flops.
                    </p>
                    <p>
                    Think classic, no big motifs or wording on your clothes and nothing too fashionable as this will date your images quickly.
                    </p>
                    <p>
                    If we are going to an appropriate location why not dress up a bit, a dress and heels looks fabulous or jeans; a shirt and suit jacket for the guys... You will feel amazing and in turn look amazing.
                    </p>
                    <p>
                    Style it up, this really makes your photos sing! You could dress in a cute vintage way not fancy dress! perhaps a 40&apos;s style dress and jeans and a waistcoat for your guy.
                    </p>
                    <p>
                    If it&apos;s a winter shoot in the park, don&apos;t just pop your jeans, trainers and winter coat on… Tights and a little skirt or tweed shorts, a chunky knit cardigan with a belt, hat scarf, gloves and cute knee high boots and wellies are far more stylish.
                    </p>
                    <div className='w-full flex justify-center pt-6'>
                            <Image src={Img4} alt="album" width="966" className='w-[966px] h-[480px] object-none object-middle'/>
                    </div>
                </div>

                <div className="flex flex-col px-4 pt-8">
                  <h2 className="text-2xl">6. Props</h2>
                    <p className="pt-4">
                    Think about the kind of props that might go with the shoot you have chosen. Perhaps you have decided on a woodland picnic, in which case you could bring a beautiful picnic blanket, hamper, pretty plates, and gorgeous looking food like strawberries, cupcakes, olives. You could bring a vintage tea-pot or a posh bottle of lemonade and glasses with fun straws.
                   </p>
                    <p>
                    If you are going strawberry picking, bring a pretty basket; a woodland winter walk... maybe a knitted blanket to hang round your shoulders and a flask of hot chocolate, even a bunch of flowers looks great as it looks like you are on a date.
                    </p>
                    <p>
                    If you do decide to bring props make them stylish !!! I could go on forever about props as they can really make a photo, they are also fun and make your images unique to you...
                    </p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default EngagementPage