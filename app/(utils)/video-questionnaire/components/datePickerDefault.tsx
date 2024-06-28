'use client';

import { useState } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import clsx from 'clsx';
import { format } from "date-fns"

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const DatePickerDefault = () => {
    const [value, onChange] = useState<any>(new Date());
  

  return (
    <>
      <Popover>
        <PopoverButton 
          className={clsx(
            "w-[280px] justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}>
           {value ? format(value, "PPP") : <span>Pick a date</span>}
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className="divide-y divide-black/5 rounded-xl bg-white text-sm/6 shadow-lg transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          <div className="p-3">
          
          <Calendar onChange={field.onChange} showWeekNumbers value={value} onClickDay={onChange} />
           
          
          </div>
          
        </PopoverPanel>
      </Popover>         
  </>

  )
}

