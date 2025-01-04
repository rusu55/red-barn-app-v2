"use client";

import { useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Field, Fieldset, Label, Legend, Button } from "@headlessui/react";

import { InputDefault } from "./inputDefault";
import { TextAreaDefault } from "./textAreaDefault";
import { DatePickerDefault } from "./datePickerDefault";


const formSchema = z.object({
  name: z.string().min(4),
 phone: z.string().optional(),
  email: z.string().email("Email address not valid!"),
  weddingDate: z.date().optional(),  
  details: z.string(),
});


type FormValues = z.infer<typeof formSchema>;
type Props = {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  disabled?: boolean;
};

const BridalForm = ({ onSubmit, disabled }: Props) => {
  const defaultValues: Partial<FormValues> = {
    name: '',
    phone: '',
    email:'',
    weddingDate: new Date(),
    details: '',
  };


  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const formSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values);
  };
  
  return (
    <div className="w-full max-w-screen-lg mx-auto md:-mt-24 ">
      <form onSubmit={handleSubmit(formSubmit)}>
        <Fieldset className="space-y-6 rounded-xl bg-neutral-50 p-6 sm:p-10">
          <Legend className="text-base/7 font-semibold">Copule Info:</Legend>
          <div className="flex flex-col md:flex-row w-full items-start justify-between gap-3 md:space-y-0">
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Bride & Groom Name</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <InputDefault
                    field={{ ...field }}
                    placeholder="e.g. Monica Hunt"
                    error={errors.name?.message}
                  />
                )}
              />
            </Field>
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Phone no.</Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <InputDefault
                    field={{ ...field }}
                    placeholder="e.g. John Boo"
                    error={errors.phone?.message}
                  />
                )}
              />
            </Field>
          </div>
          <div className="flex w-full flex-col md:flex-row items-start justify-between gap-3  md:space-y-0">
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Email Address:</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputDefault
                    field={{ ...field }}
                    placeholder="e.g. jh@example.com"
                    error={errors.email?.message}
                  />
                )}
              />
            </Field>
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Wedding Date:</Label>
              <Controller
                name="weddingDate"
                control={control}
                render={({ field }) => {
                  return (
                    <DatePickerDefault
                      onChange={field.onChange}
                      error={errors.weddingDate?.message}
                    />
                  );
                }}
              />
            </Field>
          </div>
          <div>                       
           
           
            
            <Field className="w-full  pt-6">
              <Label className="text-sm/4 font-medium ">
              Which service are you interested in?
              </Label>
              <Controller
                name="details"
                control={control}
                render={({ field }) => (
                  <TextAreaDefault
                    field={{ ...field }}
                    placeholder=""
                    error={errors.details?.message}
                  />
                )}
              />
            </Field>
            
            
          </div>
          <Button
            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
            type="submit" disabled={disabled}
          >
            Send Form
          </Button>
        </Fieldset>
      </form>
    </div>
  );
};

export default BridalForm;
