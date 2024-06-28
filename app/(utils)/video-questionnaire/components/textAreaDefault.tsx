'use client';
import {clsx} from 'clsx'
import { 
  Textarea,  
} from "@headlessui/react";


export const TextAreaDefault = ({field, placeholder, error}: any) => {
 
  return (
    
    <Textarea                
      {...field}                     
      className={clsx("mt-1 block w-full h-28 rounded-lg border-2 bg-white/3 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
      placeholder={placeholder}                        
    />
  )
}

