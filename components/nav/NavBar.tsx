import Link from "next/link";
import localFont from "next/font/local";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

const myFont = localFont({ src: "../../fonts/parisscript-regular.woff" });
import logo from "/public/images/logo.jpg";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", services:[
        {label: 'Wedding Photography',  href: "/wedding_photography"},
        {label: 'Wedding Cinematography', href: "/wedding_cinematography"},
        {label: 'Wedding Photobooth', href: "/wedding_photobooth"},
  ]},
  { label: "Portfolio", href: "/portfolio" },
  { label: "Recent Weddings", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const NavBar = () => {
  // <div className={myFont.className}><h2>Im Caroline</h2></div>
  return (
    <>
      <DesktopNav logo={logo} navigation={navigation} />
      <MobileNav logo={logo} navigation={navigation} />
    </>
  );
};
