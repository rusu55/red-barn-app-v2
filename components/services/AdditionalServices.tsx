import React from 'react'

export const AdditionalServices = () => {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:max-w-screen-lg md:mx-auto gap-x-10'>
        <div className='w-full md:w-[35%]'>
            <h2 className='px-2'>Extra Services</h2>
            <hr className="line line-hr-left" />
            <p className='px-2'>Embellish your package with our additional services. Check the list and feel free to ask questions during our Complimentary Wedding Consultations: </p>
        </div>
        <div className='w-full md:w-[60%]'>
            <div>
              <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Event Photography <span className="text-roze float-right text-sm">Minimum 4hrs coverage</span></h5>
              <h5 className='text-lg pt-6 text-left  border-b border-dashed border-slate-200'>Second Photographer <span className="text-roze float-right text-sm">Minimum 8hrs coverage</span></h5>
              <h5 className='text-lg pt-6 text-left  border-b border-dashed border-slate-200'>Second Videographer <span className="text-roze float-right text-sm">Minimum 8hrs coverage</span></h5>
              <h5 className='text-lg pt-6 text-left  border-b border-dashed border-slate-200'>Extended Coverage <span className="text-roze float-right text-sm">Minimum 1hour</span></h5>
              <h5 className='text-lg pt-6 text-left  border-b border-dashed border-slate-200'>Engagement or Family Session <span className="text-roze float-right text-sm">Minimum 45min coverage</span></h5>
              <h5 className='text-lg pt-6 text-left  border-b border-dashed border-slate-200'>Drone Coverage <span className="text-roze float-right text-sm">Addition only to Videography packages</span></h5>
            </div>
        </div>
    </div>
  )
}
