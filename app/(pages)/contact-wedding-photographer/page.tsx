import { Hero } from "@/components/ui/Hero";
import Head from "next/head";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactIntro } from "@/components/contact/ContactIntro";
import Img from '/public/images/contact-hero.webp';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.redbarnweddingstudio.com'),
  title: "Chicago Wedding Photographer - Red Barn Wedding Studio",
  description:
    "Your Perfect Wedding with our Chicago Wedding Photographer from Red Barn Wedding Studio, the best of wedding photographers and cinematographers in Chicago",

  openGraph: {
    title: "Chicago Wedding Photographer - Red Barn Wedding Studio",
    description:
      "Your Perfect Wedding with our Chicago Wedding Photographer from Red Barn Wedding Studio, the best of wedding photographers and cinematographers in Chicago",
    url: "https://redbarnweddingstudio.com",
    siteName: "Red Barn Wedding Studio",
    images: [
      {
        url: "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/796573d8-903d-4666-ae15-7c39d499072a.jpg",
        width: 800,
        height: 600,
        alt: "Wedding Photographer Chicago",
      },
      {
        url: "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/67a5370f-501a-4ad2-aab2-39169557dcb3.jpg",
        width: 800,
        height: 600,
        alt: "Wedding Photographer Chicago",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    "headline": "Wedding Photographer and Videographer Chicago land -  Red Barn Wedding Studio Contact",
    "description": "Top Chicago Wedding Photographer and Videographer  in Chicago land. Wedding Photography and Cinematography at the art level.",
    "image": [
                "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/796573d8-903d-4666-ae15-7c39d499072a.jpg",
                "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/67a5370f-501a-4ad2-aab2-39169557dcb3.jpg",
                "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/67a5370f-501a-4ad2-aab2-39169557dcb3.jpg"
              ],
    "publisher": {
                "@type": "Organization",
                "name": "Red Barn Wedding Studio",
                "logo": {
                  "@type": "ImageObject",
                  "url": "hhttps://redbarnweddingstudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.64015fa7.jpg&w=256&q=75"
                }
              },
   "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://redbarnweddingstudio.com"
             }
  }
const Contact = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        
   
    <div className="pt-20 md:pt-0">
      <Hero image={Img} title="Wedding Photographers and Videographers" description={""} />
      <div className="mx-auto max-w-screen-xl py-20 flex flex-wrap justify-center md:gap-4">
        <div className="w-full md:w-[40%]">
          <ContactIntro />
        </div>
        <div className="w-full md:w-[55%]">
          <ContactForm />
        </div>
      </div>
    </div>
   </>
  );
};

export default Contact;
