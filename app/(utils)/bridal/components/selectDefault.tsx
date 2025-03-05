'use client';
import {clsx} from 'clsx'
import { 
  Select,  
} from "@headlessui/react";


export const SelectDefault = ({field, placeholder, error}: any) => {
  
  return (
    <>
    <Select {...field}
         className={clsx("mt-1 block w-full rounded-lg border-2 bg-white/3 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
    >
        <option value="active">Please Select</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
    </Select>
    <span className='text-sm text-roze'>{error}</span>
    </>
  )
}

