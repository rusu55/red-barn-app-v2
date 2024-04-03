import React from 'react'

export const AdditionalServices = () => {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:max-w-screen-lg md:mx-auto gap-x-10'>
        <div className='w-full md:w-[35%]'>
            <h2 className='px-2'>Extra Services</h2>
            <hr className="line line-hr-left" />
            <p className='px-2'>Have another type of shooting or just want to say hello? I would love to get in touch with you in any case.</p>
        </div>
        <div className='w-full md:w-[60%]'>
            <div>
              <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Event Photography <span className="text-roze float-right text-sm">min 4 Hours Coverage</span></h5>
              <h5 className='text-lg pt-6 text-left  border-b border-dashed border-slate-200'>Second photographer <span className="text-roze float-right text-sm">6 Hours to 10 Hours Coverage</span></h5>
              <h5 className='text-lg pt-6 text-left  border-b border-dashed border-slate-200'>Second Cinematographer <span className="text-roze float-right text-sm">6 Hours to 10 Hours Coverage</span></h5>
              <h5 className='text-lg pt-6 text-left  border-b border-dashed border-slate-200'>Extended coverage <span className="text-roze float-right text-sm">min 1 Hour</span></h5>
              <h5 className='text-lg pt-6 text-left  border-b border-dashed border-slate-200'>Engagement or Family Sessin <span className="text-roze float-right text-sm">45 Min Coverage</span></h5>
              <h5 className='text-lg pt-6 text-left  border-b border-dashed border-slate-200'>Drone Coverage <span className="text-roze float-right text-sm">contact us for details</span></h5>
            </div>
        </div>
    </div>
  )
}
