"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

export const SearchBarVenue = ({ search }: { search?: string }) => {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 750);
  
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(`/wedding-venues`);
    } else {
      router.push(`/wedding-venues?search=${query}`);
    }
  }, [query, router]);

  return (
    <div>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>  
      <div className="flex items-center"> 
        <span className="inline-block w-[200px] text-md font-bold">Search for venue: </span>
        <div className="rounded-md shadow-sm w-full">
        <input
          value={text}
          placeholder="Search venues..."
          onChange={(e) => setText(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-grey-300 focus:ring-roze focus:ring-inset focus:ring-2 focus:outline-none sm:text-sm sm:leading-6 transition-all duration-300"
        />
        </div>
      </div> 
    </div>
  );
};
