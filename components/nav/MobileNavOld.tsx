'use client'
import { Menu, Popover, Transition } from "@headlessui/react";
import { useState } from "react";
import { Fragment } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { MenuIcon } from "./MenuIcon";



export const MobileNav = ({navigation} : any) => {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <div className="block fixed h-full lg:hidden z-50">
         <Popover>           
              <Popover.Button
                  className="group relative z-50 h-5 w-6 rotate-0 transform cursor-pointer transition duration-500 ease-in-out focus:outline-none"
                  aria-label="Toggle Navigation"
                >
                  {({ open }) => <MenuIcon open={open} />}
                </Popover.Button>                  
                    <Transition
                    as={Fragment}
                    enter="duration-300 ease-out"
                    enterFrom="opacity-0 -translate-y-full"
                    enterTo="opacity-100 translate-y-0"
                    leave="duration-200 ease-in"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-full"
                  >
                      <Popover.Panel                        
                        as="div"                        
                        className='absolute inset-x-0 top-0 z-40 w-screen h-[70%] overflow-y-scroll bg-gradient-to-tr from-purple-600 to-purple-600 px-4 py-16 sm:px-8'
                      >
                            <div className="flex h-full w-full flex-col items-center justify-center">
                                <div className="mx-auto flex w-full flex-col items-center justify-evenly space-y-6">
                                    {navigation.map((link: any, index: string) =>(
                                        <Fragment
                                            key={`nav-${index}`}
                                        >
                                            <Link href={`${link.href}`} onClick={close}>
                                                <div className="group relative p-0.5">
                                                    <span className="relative z-10 text-2xl font-medium text-purple-50 duration-300 ease-in-out group-hover:text-white">
                                                        {link.label}
                                                    </span>
                                                </div>
                                            </Link>
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                      </Popover.Panel>
                   </Transition>     
          </Popover>
      </div>
  )
}

