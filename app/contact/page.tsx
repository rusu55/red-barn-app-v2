import { Hero } from "@/components/ui/Hero";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactIntro } from "@/components/contact/ContactIntro";
import Img from '/public/images/contact-hero.jpg';

const Contact = () => {
  return (
    <div className="pt-20 md:pt-0">
      <Hero image={Img} title={""} description={""} />
      <div className="mx-auto max-w-screen-xl py-20 flex flex-wrap justify-center md:gap-4">
        <div className="w-full md:w-[40%]">
          <ContactIntro />
        </div>
        <div className="w-full md:w-[55%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
