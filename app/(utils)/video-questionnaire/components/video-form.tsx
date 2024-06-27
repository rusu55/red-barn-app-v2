"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
  Button,
} from "@headlessui/react";
import { clsx } from "clsx";

const formSchema = z.object({
  brideName: z.string().min(4),
  groomName: z.string().min(4),
  email: z.string().email("Email address not valid!"),
  weddingDate: z.string(),
  songsOptions: z.string(),
  highlightSong: z.string().optional(),
  videoSongs: z.string().optional(),
  details: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
});

type FormValues = z.infer<typeof formSchema>;
type Props = {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  disabled?: boolean;
};

const VideoForm = ({ onSubmit, disabled }: Props) => {
  const defaultValues: Partial<FormValues> = {};

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
    <div className="w-full max-w-screen-lg mx-auto">
      <form onSubmit={handleSubmit(formSubmit)}>
        <Fieldset className="space-y-6 rounded-xl bg-black/5 p-6 sm:p-10">
          <Legend className="text-base/7 font-semibold">Copule Info:</Legend>
          <div className="flex w-full items-center justify-between space-x-3">
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Bride Name</Label>
              <Controller
                name="brideName"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      className={clsx(
                        "mt-1 block w-full rounded-lg border-2 bg-white/3 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
                    />
                    <p>{errors.brideName?.message}</p>
                  </>
                )}
              />
            </Field>
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Groom Name</Label>
              <Controller
                name="groomName"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      className={clsx(
                        "mt-1 block w-full rounded-lg border-2 bg-white/3 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
                    />
                    <p>{errors.groomName?.message}</p>
                  </>
                )}
              />
            </Field>
          </div>
          <div className="flex w-full items-center justify-between space-x-3">
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Email Address:</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      className={clsx(
                        "mt-1 block w-full rounded-lg border-2 bg-white/3 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
                    />
                    <p>{errors.email?.message}</p>
                  </>
                )}
              />
            </Field>
            <Field className="w-full">
              <Label className="text-sm/4 font-medium ">Wedding Date:</Label>
              <Controller
                name="weddingDate"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      className={clsx(
                        "mt-1 block w-full rounded-lg border-2 bg-white/3 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
                    />
                    <p>{errors.weddingDate?.message}</p>
                  </>
                )}
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
