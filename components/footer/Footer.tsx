"use client";
import Link from "next/link";
import React from "react";

import { useRef, useEffect } from "react";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <footer ref={containerRef}>
      <div className="bg-neutral-100/75">
        <div className="mx-auto max-w-screen-xl mt-10">
          <div className="flex flex-col items-center space-y-12 md:flex-row md:justify-evenly py-20">
            <div>
              <h6 className="relative text-lg font-semibold tracking-wide text-black">
                <span className="relative z-20">Connect with Us</span>
                <span className="absolute -bottom-1 left-0 z-10 h-[1px] w-full rounded-lg bg-neutral-300" />
              </h6>
              <ul className="mt-6 text-lg space-y-2 text-center md:text-right">
                <li className="font-medium text-xs text-neutral-400 duration-300 ease-in-out hover:text-roze">
                  <Link href="https://www.facebook.com/RedBarnWeddingStudio">FACEBOOK</Link>
                </li>
                <li className="font-medium text-xs text-neutral-400 duration-300 ease-in-out hover:text-roze">
                  <Link href="https://www.instagram.com/redbarnweddingstudio/">INSTAGRAM</Link>
                </li>
                <li className="font-medium text-xs text-neutral-400 duration-300 ease-in-out hover:text-roze">
                  <Link href="https://www.weddingwire.com/biz/red-barn-wedding-studio/776d90b9b48065a1.html">WEDDINGWIRE</Link>
                </li>
                <li className="font-medium text-xs text-neutral-400 duration-300 ease-in-out hover:text-roze">
                  <Link href="https://www.theknot.com/marketplace/red-barn-wedding-studio-schaumburg-il-2027022">THE KNOT</Link>
                </li>
                <li className="font-medium text-xs text-neutral-400 duration-300 ease-in-out hover:text-roze">
                  <Link href="https://vimeo.com/user81106458">VIMEO</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-pariss text-roze">Red Barn</h2>
              <span className="inline-block w-full text-center">
                Wedding Studio
              </span>
            </div>
            <div>
              <h6 className="relative text-lg font-semibold tracking-wide text-black">
                <span className="relative z-20">Find your way around</span>
                <span className="absolute -bottom-1 left-0 z-10 h-[1px] w-full rounded-lg bg-neutral-300" />
              </h6>

              <ul className="mt-6 text-lg space-y-2 text-center md:text-right">
                <li className="font-medium text-xs text-neutral-400 duration-300 ease-in-out hover:text-roze">
                  <Link href="/">HOME</Link>
                </li>

                <li className="font-medium text-xs text-neutral-400 duration-300 ease-in-out hover:text-roze">
                  <Link href="/about">ABOUT</Link>
                </li>
                <li className="font-medium text-xs text-neutral-400 duration-300 ease-in-out hover:text-roze">
                  <Link href="/contact">CONTACT</Link>
                </li>
                <li className="font-medium text-xs text-neutral-400 duration-300 ease-in-out hover:text-roze">
                  <Link href="/portfolio">PORTFOLIO</Link>
                </li>
                <li className="font-medium text-xs text-neutral-400 duration-300 ease-in-out hover:text-roze">
                  <Link href="/blog">BLOG</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200">
        <div className="mx-auto max-w-screen-xl text-center">
          <span className=" inline-block py-4">
           Red Barn Wedding Studio | Wedding Photography
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
