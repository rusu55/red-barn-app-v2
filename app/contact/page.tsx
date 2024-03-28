import { Hero } from "@/components/ui/Hero";
import hero_img from "/public/images/about.jpg";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactIntro } from "@/components/contact/ContactIntro";

const Contact = () => {
  return (
    <>
      <Hero image={hero_img} title={""} description={""} />
      <ContactIntro />
      <ContactForm />
    </>
  );
};

export default Contact;
