import type { Metadata } from "next";
import Script from "next/script";
import { Nunito, Old_Standard_TT } from "next/font/google";
import "./globals.css";

import { ParallaxProviders } from "@/providers/ParallaxProvider";
import { NavBar } from "@/components/nav/NavBar";
import Footer from "@/components/footer/Footer";
import { TackChat } from "@/components/ui/TackChat";

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

export const metadata: Metadata = {
  title: "Chicago Luxury Wedding Photography and Vinematography",
  description:
    "Book your Wedding Day with Red Barn Wedding Studio, the best of wedding photography and cinematography in Chicago. Cherish memories for a lifetime.",
  openGraph: {
    title: "Title webtsite",
    description: "this is the desciption",
    images:
      "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/5acd99b1-8561-4ef0-84ee-6bdea535dd9b.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${old_standard.variable}`}>
        <NavBar />
        <ParallaxProviders>{children}</ParallaxProviders>
        <TackChat />
        <Footer />
      </body>
    </html>
  );
}
