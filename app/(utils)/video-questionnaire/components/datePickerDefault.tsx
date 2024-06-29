"use client";

import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { IconCalendarMonth } from "@tabler/icons-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import clsx from "clsx";
import { format } from "date-fns";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const DatePickerDefault = ({ onChange, error }: any) => {
  const [value, setValue] = useState<any>();

  return (
    <>
      <Popover>
        <PopoverButton
          className={clsx(
            "w-full rounded-lg border-2 bg-white/3 py-1.5 px-3 text-sm/6 text-black relative",
            !value && "text-black/50"
          )}
        >
          <IconCalendarMonth
            className=" absolute h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          {value ? (
            format(value, "PPP")
          ) : (
            <span>Enter Your Wedding Date...</span>
          )}
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className="divide-y divide-black/5 rounded-xl bg-white text-sm/6 shadow-lg transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          <div className="p-3">
            <Calendar
              onChange={onChange}
              showWeekNumbers
              value={value}
              onClickDay={setValue}
            />
          </div>
        </PopoverPanel>
      </Popover>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error}
        </p>
      )}
    </>
  );
};
