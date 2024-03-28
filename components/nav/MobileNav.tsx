'use client';

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { MenuIcon } from "./MenuIcon";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import clsx from "clsx";

export const MobileNav = ({navigation}: any) => {
    const pathName = usePathname();
  return (
    <div className="block fixed lg:hidden z-50 h-full">
        <Menu as="div" className="relative h-full">
                {({ open }) => (
                  <>
                    <Menu.Button  className="group relative z-50 h-5 w-6 rotate-0 transform cursor-pointer transition duration-500 ease-in-out focus:outline-none">
                      <MenuIcon open={open} />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="duration-300 ease-out"
                      enterFrom="opacity-0 -translate-y-full"
                      enterTo="opacity-100 translate-y-0"
                      leave="duration-200 ease-in"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-full"
                    >
                      <Menu.Items className="absolute inset-x-0 top-0 z-40 w-screen h-full overflow-y-scroll bg-gradient-to-tr from-purple-600 to-purple-600 px-4 py-16 sm:px-8 flex flex-col justify-center">
                        {navigation.map((service: any, index: any) => (
                          <Menu.Item key={`menu-${index}`}>
                            {({ close }) => (
                              <>
                              <div className="flex w-full">
                                <Link
                                  href={`${service.href}`}
                                  className={clsx(
                                    "group block w-full rounded-xl py-4 sm:p-5 text-center",
                                    pathName === `/programs/${service.label}`
                                      ? "bg-roze"
                                      : "transition duration-300 ease-in-out hover:bg-roze/20"
                                  )}
                                  onClick={close}
                                >
                                                <div className="group p-0.5">
                                                    <span className="z-10 text-2xl font-medium text-purple-50 duration-300 ease-in-out group-hover:text-white">
                                                        {service.label}
                                                    </span>
                                                </div>                                  
                                </Link>
                                {index != navigation.length - 1 && (
                                  <>
                                    <hr className="my-1 border-purple-200/30 sm:my-2" />
                                  </>
                                )}
                                </div>
                              </>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
    </div>
  )
}

