
import Script from "next/script";
import { Nunito, Old_Standard_TT } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

import { ParallaxProviders } from "@/providers/ParallaxProvider";
import { NavBar } from "@/components/nav/NavBar";
import Footer from "@/components/footer/Footer";
import { TackChat } from "@/components/ui/TackChat";
import ToasterProvider from "@/providers/ToastProvider";

const nunito = Nunito({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const old_standard = Old_Standard_TT({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-old_standard",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <Script  defer src="https://cloud.umami.is/script.js" data-website-id="bbd44199-17b1-465c-a696-43d2f251e3dd" />
      </head>
      <body className={`${nunito.variable} ${old_standard.variable}`}>
        <NavBar />
        <ToasterProvider />
        <ParallaxProviders>{children}</ParallaxProviders>
        <TackChat />
        <Footer />
        <GoogleAnalytics gaId="G-XXNF8207Y0" />
      </body>
    </html>
  );
}
