import { Icon } from "@/components//ui/Icon"
import { RevealComponent } from "@/components/ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";
export const ExtraServices = () => {
  return (
    <div className="bg-neutral-100/75"> 
    <RevealComponent index={1} variants={fadeBottomTop}>
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center py-14">
                <div className="w-full md:w-1/2 px-4">
                            <div className="flex flex-col">
                                <span className="uppercase text-md tracking-widest  text-roze pb-3">Digital Printing</span>
                                <h2>Wedding Albums</h2>
                                <hr className="line line-hr-left" />
                                <div className="w-full lg:w-[90%]">
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>10x8 Wedding Album<span className="text-roze float-right text-sm">$350</span></h5>
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>10x10 Wedding Album<span className="text-roze float-right text-sm">$350</span></h5>
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>14x11 Wedding Album<span className="text-roze float-right text-sm">$450</span></h5>
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>12x12 Wedding Album<span className="text-roze float-right text-sm">$450</span></h5>
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Cover Album Upgrade<span className="text-roze float-right text-sm">$150</span></h5>
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Parent`s Albums (<span className=" text-sm">bundle of TWO, clone of the Bride Album</span>)<span className="text-roze float-right text-sm">$450</span></h5>
                                </div>
                            </div>                            
                </div>
                <div className="w-full md:w-1/2 px-4">
                            <div className="flex flex-col">
                                <span className="uppercase text-md tracking-widest  text-roze pb-3">Add-ons</span>
                                <h2>Extra Services</h2>
                                <hr className="line line-hr-left" />
                                <div className="w-full lg:w-[90%]">
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Second Photographer<span className="text-roze float-right text-sm">$1000 (10 hours)</span></h5>
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Second Videographer<span className="text-roze float-right text-sm">$1000 (10 hours)</span></h5>
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Engagement Session<span className="text-roze float-right text-sm">$375 (60 minutes)</span></h5>
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Family Session<span className="text-roze float-right text-sm">$375 (60 minutes)</span></h5>
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Proposal Session<span className="text-roze float-right text-sm">$375 (60 minutes)</span></h5>
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Event Photography (min 4 hours)<span className="text-roze float-right text-sm">$275 / hour</span><br /><span className="text-sm">(Corporate, vows renewal or private parties)</span></h5>
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Additional Coverage <span className="text-roze float-right text-sm">$200 / hour (per professional)</span><br /><span className="text-sm">(for booked events)</span></h5>
                                    
                                    
                                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Drone Coverage<span className="text-roze float-right text-sm">$400</span></h5>
                                </div>
                            </div>                            
                </div>
        </div>
    </RevealComponent>
    </div>
  )
}
