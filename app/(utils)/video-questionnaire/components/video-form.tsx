"use client";

import { useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Field, Fieldset, Label, Legend, Button } from "@headlessui/react";

import states from "states-us";
import ComboBoxDefaultWrapper from "./comboBoxDefault";
import { InputDefault } from "./inputDefault";
import { TextAreaDefault } from "./textAreaDefault";
import { DatePickerDefault } from "./datePickerDefault";


const formSchema = z.object({
  brideName: z.string().min(4),
  groomName: z.string().min(4),
  email: z.string().email("Email address not valid!"),
  weddingDate: z.date(),
  songsOptions: z.object({
    id: z.any(),
    label: z.any(),
    value: z.any()
  }),
  highlightSong: z.string().optional(),
  videoSongs: z.string().optional(),
  state: z.any().optional(),
  zipCode: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  details: z.string(),
});
const comboBoxOptions = [
  {
    id: 1,
    label: "Yes, I would like you to choose the songs for my video",
    value: "Red Barn Selection",
  },
  {
    id: 2,
    label: " No, please see the songs we have chose bellow",
    value: "Bride Slection",
  },
];

type FormValues = z.infer<typeof formSchema>;
type Props = {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  disabled?: boolean;
};

const VideoForm = ({ onSubmit, disabled }: Props) => {
  const defaultValues: Partial<FormValues> = {};



  const statesOption =  useMemo(()=>{   
    return states.map(({ name, abbreviation }, index) => ({
      id: index,
      label: name,
      value: abbreviation,
    }))
}, [states])

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
          <div className="flex flex-col md:flex-row w-full items-start justify-between space-x-3 space-y-4 md:space-y-0">
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Bride Name</Label>
              <Controller
                name="brideName"
                control={control}
                render={({ field }) => (
                  <InputDefault
                    field={{ ...field }}
                    placeholder="e.g. Monica Hunt"
                    error={errors.brideName?.message}
                  />
                )}
              />
            </Field>
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Groom Name</Label>
              <Controller
                name="groomName"
                control={control}
                render={({ field }) => (
                  <InputDefault
                    field={{ ...field }}
                    placeholder="e.g. John Boo"
                    error={errors.groomName?.message}
                  />
                )}
              />
            </Field>
          </div>
          <div className="flex w-full flex-col md:flex-row items-start justify-between space-x-3 space-y-4 md:space-y-0">
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
            <Legend className="text-base/7 font-semibold">
              Songs Selection
              <span className="block text-sm font-thin">
                Our studio has a database of songs that usually work well with
                certain styles of couples and weddings. At the discretion of the
                studio, would you be willing to allow us to use creative
                judgments for certain songs on your video? If you have
                particular songs you would like used in the video please list
                them below.
              </span>
            </Legend>
            <Controller
              name="songsOptions"
              control={control}
              render={({ field }) => {
                
                return (
                  <ComboBoxDefaultWrapper
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    options={comboBoxOptions}
                    error={errors.songsOptions?.message}
                  />
                );
              }}
            />
            <Field className="w-full pt-6">
              <Label className="text-sm/4 font-medium ">
                Highlight Video - Song:
              </Label>
              <Controller
                name="highlightSong"
                control={control}
                render={({ field }) => (
                  <InputDefault
                    field={{ ...field }}
                    placeholder="provide song name and artist or youtube link..."
                  />
                )}
              />
            </Field>
            <Field className="w-full  pt-6">
              <Label className="text-sm/4 font-medium ">
                Full Length Video, select three songs: one slow song for the
                getting ready part of the day, one more dynamic for the romantic
                session and bridal party pictures and one dancing one for the
                dancing segment:
              </Label>
              <Controller
                name="videoSongs"
                control={control}
                render={({ field }) => (
                  <TextAreaDefault
                    field={{ ...field }}
                    placeholder="provide song name and artist or youtube link..."
                  />
                )}
              />
            </Field>
            <Field className="w-full  pt-6">
              <Label className="text-sm/4 font-medium ">
                What are important elements that you will like to make sure are
                included in the full length film?
              </Label>
              <Controller
                name="details"
                control={control}
                render={({ field }) => (
                  <TextAreaDefault
                    field={{ ...field }}
                    placeholder="provide song name and artist or youtube link..."
                    error={errors.details?.message}
                  />
                )}
              />
            </Field>
            <Legend className="text-base/7 font-semibold pt-6">
              Current Address:
            </Legend>
            <Field className="w-full pt-2">
              <Label className="text-sm/4 font-medium ">Address:</Label>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <InputDefault
                    field={{ ...field }}
                    
                  />
                )}
              />
            </Field>
            <div className="flex flex-col md:flex-row w-full items-start justify-between space-x-2 space-y-4 md:space-y-0 pt-6">
              <Field className="w-full">
                <Label className="text-sm/4 font-medium ">City:</Label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <InputDefault
                      field={{ ...field }}
                      error={errors.address?.message}
                      placeholder="City Name..."
                    />
                  )}
                />
              </Field>
              <Field className="w-[80%] -mt-0.5">
                <Label className="text-sm/4 font-medium ">State:</Label>
                <Controller
                  name="state"
                  control={control}
                  render={({ field: { onChange, value, onBlur } }) => (
                    <ComboBoxDefaultWrapper
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      options={statesOption}                      
                    />
                  )}
                />
              </Field>
              <Field className="w-full">
                <Label className="text-sm/4 font-medium ">Zip Code:</Label>
                <Controller
                  name="zipCode"
                  control={control}
                  render={({ field }) => (
                    <InputDefault
                      field={{ ...field }}                      
                      placeholder=""
                    />
                  )}
                />
              </Field>
            </div>
          </div>
          <Button
            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
            type="submit"
          >
            Save changes
          </Button>
        </Fieldset>
      </form>
    </div>
  );
};

export default VideoForm;
