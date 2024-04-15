"use client";

import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "./MenuIcon";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import clsx from "clsx";

export const MobileNav = ({ logo, navigation }: any) => {
  const pathName = usePathname();
  return (
    <>
      <div className="block fixed lg:hidden z-50 w-full ">
        <div className=" h-16 w-full bg-white  shadow-md shadow-black/5 absolute top-0 z-30 flex items-center justify-center">
          <Image src={logo} width={140} alt="" className="z-50" />
        </div>

        <Menu as="div">
          {({ open }) => (
            <>
              <Menu.Button className="group relative z-50 h-4 w-6 rotate-0 transform cursor-pointer transition duration-500 ease-in-out focus:outline-none">
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
                <Menu.Items className="absolute inset-x-0 top-0 z-40 w-screen h-screen overflow-y-scroll bg-gradient-to-tr from-roze to-roze px-4 py-16 sm:px-8 flex flex-col justify-center">
                  {navigation.map((service: any, index: any) => (
                    <Menu.Item key={`menu-${index}`}>
                      {({ close }) => (
                        <>
                          <div className="flex w-full">
                            {service.label !== "Services" ? (
                              <Link
                                href={`${service.href}`}
                                className={clsx(
                                  "group block w-full rounded-xl py-4 sm:p-5 text-center",
                                  pathName === `/services/${service.label}`
                                    ? "bg-white"
                                    : "transition duration-300 ease-in-out hover:bg-gray-800/10"
                                )}
                                onClick={close}
                              >
                                <div className="group p-0.5">
                                  <span className="z-10 text-xl font-medium text-purple-50 duration-300 ease-in-out group-hover:text-white">
                                    {service.label}
                                  </span>
                                </div>
                              </Link>
                            ) : (
                              <div className="mx-auto w-full max-w-md">
                                <p className="text-center text-lg font-semibold uppercase tracking-wider text-gray-600 mt-4 ">
                                  Services
                                </p>
                                <hr className="my-1 border-gray-800/20 sm:my-2" />
                                {service.services.map(
                                  (item: any, index: number) => (
                                    <Link
                                      key={index}
                                      href={`/services/${item.href}`}
                                      className={clsx(
                                        "group block w-full rounded-xl py-4 sm:p-5 text-center",
                                        pathName ===
                                          `/services/${service.label}`
                                          ? "bg-white"
                                          : "transition duration-300 ease-in-out hover:bg-gray-800/10"
                                      )}
                                      onClick={close}
                                    >
                                      <div className="group p-0.5">
                                        <span className="z-10 text-xl font-medium text-purple-50 duration-300 ease-in-out group-hover:text-white">
                                          {item.label}
                                        </span>
                                      </div>
                                    </Link>
                                  )
                                )}
                                <hr className="my-1 border-gray-800/20 sm:my-2" />
                              </div>
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
    </>
  );
};
