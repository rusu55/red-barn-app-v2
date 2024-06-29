"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import clsx from "clsx";
import { format } from "date-fns";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const page = () => {
  /*
    const [value, onChange] = useState<any>(new Date());

    const { handleSubmit, control, reset } = useForm<any>({
        defaultValues: {
            MyCheckbox: {}
        },
      })

      const onSubmit: SubmitHandler<any> = (data) => console.log(data)

  return (
    <div className="flex h-screen w-full justify-center pt-20">
    <div className="flex gap-8">
    <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
                name="MyCheckbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
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
          
          <Calendar  {...field} onChange={field.onChange} showWeekNumbers value={value} onClickDay={onChange} />
           
          
          </div>
          
        </PopoverPanel>
      </Popover>
                )} />
       <input type="submit"  className=" mt-24 p-10 shadow-lg"/>
      </form>
      <div className="text-sm/6 font-semibold text-white/50">Pricing</div>
    </div>
  </div>      

  )
  */
  return <></>;
};

export default page;
