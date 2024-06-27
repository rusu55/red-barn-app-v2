'use client';

import { useForm, Controller } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from 'zod';
import { Field, Fieldset, Input, Label, Legend, Select, Textarea, Button } from '@headlessui/react';
import {clsx} from 'clsx';

const formSchema =  z.object({
  firstName: z.string(),
  lastName: z.string()
})

type FormValues = z.infer<typeof formSchema>
type Props = {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  disabled?: boolean;
}

const VideoForm = ({onSubmit, disabled}: Props) => {
  const defaultValues: Partial<FormValues> = {}

 const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues
    })


    const handleSubmit = (values: z.infer<typeof formSchema>) => {
      onSubmit(values)
   }
  
  return (
    <div className="w-full max-w-lg px-4">
      
      <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
      <Legend className="text-base/7 font-semibold">Shipping details</Legend>
      <Field>
          <Label className="text-sm/6 font-medium ">Street address</Label>
          <Controller
           name="firstName"
           control={control}
           render={({ field }) =><Input {...field}
           className={clsx(
             'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
             'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
           )}
         />}
      />
          
        </Field>
        <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white" type="submit">
      Save changes
    </Button>
      </Fieldset>
      </form>
        
    </div>
  )
}

export default VideoForm


