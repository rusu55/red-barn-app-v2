"use client";

import { Button } from "@/components/ui/Button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Field, Fieldset, Label, Legend } from "@headlessui/react";

import { InputDefault } from "./inputDefault";
import { TextAreaDefault } from "./textAreaDefault";
import { DatePickerDefault } from "./datePickerDefault";
import { SelectDefault } from "./selectDefault";

const formSchema = z.object({
  first_name: z.string().min(4),
  last_name: z.string().min(4),
 phone: z.string().optional(),
  email: z.string().email("Email address not valid!"),
  wedding_date: z.date().optional(),  
  details: z.string(),
  source: z.any(),
});


type FormValues = z.infer<typeof formSchema>;
type Props = {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  disabled?: boolean;
  source?: string;
};

const BridalForm = ({ onSubmit, disabled, source }: Props) => {
  const defaultValues: Partial<FormValues> = {
    first_name: '',
    last_name: '',
    phone: '',
    email:'',
    wedding_date: new Date(),
    details: '',
    source: '',
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
    <div className="w-full max-w-screen-lg mx-auto md:mt-6">
      <form onSubmit={handleSubmit(formSubmit)}>
        <Fieldset className="space-y-6 rounded-xl bg-neutral-50 p-6 sm:p-10">
          <Legend className="text-base/7 font-semibold">Copule Info:</Legend>
          <div className="flex flex-col md:flex-row w-full items-center justify-between gap-3 md:space-y-0">
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">First Name</Label>
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => (
                  <InputDefault
                    field={{ ...field }}
                    
                    error={errors.first_name?.message}
                  />
                )}
              />
            </Field>
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Last Name</Label>
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => (
                  <InputDefault
                    field={{ ...field }}
                    
                    error={errors.last_name?.message}
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
                name="wedding_date"
                control={control}
                render={({ field }) => {
                  return (
                    <DatePickerDefault
                      onChange={field.onChange}
                      error={errors.wedding_date?.message}
                    />
                  );
                }}
              />
            </Field>
          </div>
          <div className="flex flex-col md:flex-row w-full items-center justify-between gap-3 md:space-y-0">
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Phone no. (Optional)</Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <InputDefault
                    field={{ ...field }}
                    placeholder="e.g. (312) 111 2233"
                    error={errors.phone?.message}
                  />
                )}
              />
            </Field>
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Where did you hear about us?</Label>
              <Controller
                name="source"
                control={control}
                render={({ field }) => (
                  <SelectDefault
                    field={{ ...field }}                    
                    error={errors.last_name?.message}
                  />
                )}
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
          <div className="w-full flex justify-center" >
            <Button
              className="rounded-xl mt-8 w-[200px]" disabled={disabled}
            >
              Send Form
            </Button>
          </div>
          
        </Fieldset>
      </form>
    </div>
  );
};

export default BridalForm;
