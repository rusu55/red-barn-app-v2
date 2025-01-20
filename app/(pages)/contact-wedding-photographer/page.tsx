import { Hero } from "@/components/ui/Hero";
import Head from "next/head";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactIntro } from "@/components/contact/ContactIntro";
import Img from '/public/images/contact-hero.webp';


export const metadata: Metadata = {
  title: " Wedding Photographer and Videographer Chicago land -  Red Barn Wedding Studio Contact",
  description: "Top Chicago Wedding Photographer and Videographer  in Chicago land. Wedding Photography and Cinematography at the art level."
}

const Contact = () => {
  return (
    <>    

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Wedding Photographer and Videographer Chicago land -  Red Barn Wedding Studio Contact",
              "description": "Top Chicago Wedding Photographer and Videographer  in Chicago land. Wedding Photography and Cinematography at the art level.",
              "image": [
                "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/796573d8-903d-4666-ae15-7c39d499072a.jpg",
                "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/67a5370f-501a-4ad2-aab2-39169557dcb3.jpg",
                "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/67a5370f-501a-4ad2-aab2-39169557dcb3.jpg"
              ],
              "author": {
                "@type": "Company",
                "name": "Red Barn Wedding Studio"
              },
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
            }),
          }}
        />
   
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
