
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
     
          <Script id="fb-pixel">
              {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '518469474692190');
              fbq('track', 'PageView');
              `}
          </Script>
          <noscript><img height="1" width="1" style={{display: 'none'}}
          src={`https://www.facebook.com/tr?id=518469474692190&ev=PageView&noscript=1`}
          /></noscript>
          {/* End Meta Pixel Code */}
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
