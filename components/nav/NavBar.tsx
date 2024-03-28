import Link from "next/link";
import localFont from "next/font/local";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

const myFont = localFont({ src: "../../fonts/parisscript-regular.woff" });
import logo from "/public/images/logo.jpg";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const NavBar = () => {
  // <div className={myFont.className}><h2>Im Caroline</h2></div>
  return (
    <>
      <DesktopNav logo={logo} navigation={navigation} />
      <MobileNav navigation={navigation} />
    </>
  );
};
