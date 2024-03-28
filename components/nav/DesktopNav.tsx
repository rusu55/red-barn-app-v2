"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Fragment } from "react";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";

import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";

const services = [
  { label: "Wedding Photography", href: "/wedding_photography" },
  { label: "Wedding Cinematography", href: "/wedding_cinematography" },
  { label: "Wedding Photobooth", href: "/wedding_photobooth" },
];

export const DesktopNav = ({ logo, navigation }: any) => {
  const pathName = usePathname();

  let oldValue = 0;
  let newValue = 0;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    console.log("scroll");
    const element: any = document.querySelector(".nav");
    const scrollBtn: any = document.querySelector(".scrollBtn");
    newValue = window.pageYOffset;

    if (
      oldValue < newValue &&
      window.scrollY > 400 &&
      window.innerWidth > 992
    ) {
      element.classList.add("fixedNav");
    }
    if (
      oldValue < newValue &&
      window.scrollY > 560 &&
      window.innerWidth > 992
    ) {
      element.classList.add("floatNav");
      scrollBtn.classList.add("floatBtn");
    } else if (
      oldValue > newValue &&
      window.scrollY < 450 &&
      window.innerWidth > 992
    ) {
      element.classList.remove("floatNav");
      element.classList.remove("fixedNav");
      scrollBtn.classList.remove("floatBtn");
    }
    oldValue = newValue;
  };

  return (
    <>
      <div className="nav w-full bg-white shadow-md shadow-black/5">
        <div className="hidden mx-auto max-w-screen-xl py-4 lg:flex items-center justify-between">
          <Image src={logo} width={160} alt="" className=" pl-4" />
          <div className="flex gap-6 pr-12">
            {navigation.map((link: any, index: any) => (
              <Fragment key={`link-${index}`}>
                {link.label !== "Services" ? (
                  <Link href={`${link.href}`}>
                    <div className="group relative p-0.5">
                      <span
                        className={clsx(
                          "relative z-10 text-lg font-medium font-old",
                          pathName === link.href
                            ? "text-roze"
                            : "roze duration-300 ease-in-out group-hover:text-roze"
                        )}
                      >
                        {link.label}
                      </span>
                      <span
                        className={clsx(
                          "absolute -left-1 -right-1 bottom-0 h-0.5 scale-x-0 bg-roze/50",
                          pathName === link.href
                            ? "scale-x-100"
                            : "duration-300 ease-in-out group-hover:scale-x-100"
                        )}
                      />
                    </div>
                  </Link>
                ) : (
                  <Menu as="div" className="relative">
                    {({ open }) => (
                      <>
                        <Menu.Button className="outline-none focus:outline-none">
                          <div className="group relative p-0.5">
                            <span
                              className={clsx(
                                "relative z-10 flex items-center text-lg font-medium duration-300 ease-in-out group-hover:text-roze font-old",
                                open ? "text-roze" : ""
                              )}
                            >
                              Services
                              {/* Heroicon name: solid/chevron-down */}
                              {/* Toggle class 'rotate-180' on dropdown open and close */}
                              <Icon
                                icon="chevronDown"
                                className={clsx(
                                  "h-4.5 ml-1.5 w-4.5 transform duration-300 ease-in-out",
                                  open && "rotate-180"
                                )}
                                stroke={2}
                              />
                            </span>
                            <span className="absolute -left-1 -right-1 bottom-0 h-0.5 origin-bottom scale-x-0 transform rounded-lg bg-roze/50 duration-300 ease-in-out group-hover:scale-x-100" />
                          </div>
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-300"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-200"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute left-1/2 z-20 mt-3 w-screen max-w-xs -translate-x-1/2 rounded-2xl border border-gray-50 bg-white p-4 shadow-lg outline-none focus:outline-none">
                            {services.map((service: any, index: any) => (
                              <Menu.Item key={`menu-${index}`}>
                                {({ close }) => (
                                  <>
                                    <Link
                                      href={`/services/${service.href}`}
                                      className={clsx(
                                        "group block w-full rounded-xl py-4 sm:p-5",
                                        pathName ===
                                          `/programs/${service.label}`
                                          ? "bg-roze"
                                          : "transition duration-300 ease-in-out hover:bg-roze/20"
                                      )}
                                      onClick={close}
                                    >
                                      <h5 className="text-lg font-light">
                                        {service.label}
                                      </h5>
                                      <p className="mt-1 text-sm opacity-90">
                                        {service.label}
                                      </p>
                                    </Link>
                                    {index != services.length - 1 && (
                                      <>
                                        <hr className="my-1 border-purple-200/30 sm:my-2" />
                                      </>
                                    )}
                                  </>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full fixed top-3/4 translate-x-full opacity-0 scrollBtn z-50">
        <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Top
        </Button>
      </div>
    </>
  );
};
