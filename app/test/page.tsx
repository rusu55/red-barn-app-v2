"use client";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Section = ({ children, className }: any) => {
  // const ref = useRef<HTMLDivElement>(null);
  //const isInView = useInView(ref, { once: true });

  return (
    /*
    <div ref={ref} className="flex flex-col min-h-[90vh] reveal">
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </div>
    */
    <div className={`flex flex-col min-h-[90vh] reveal ${className}`}>
      <p>{children}</p>
    </div>
  );
};

const Test = () => {
  
  const divRefs = useRef();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const reveals = document.querySelectorAll(".reveal");
    
    for (let i = 0; i < reveals.length; i++) {
      let windowsHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 150;

      if (revealTop < windowsHeight - revealPoint) {
        reveals[i].classList.add("floatLeft");
      } else {
        reveals[i].classList.remove("floatLeft");
      }
    }
  };
  return (
    <>
      <Section className="floatLeft">
        Animate Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
        fuga dolorem harum aliquam? Dignissimos, praesentium cum eaque eius
        magni officia eligendi animi? Accusamus aperiam architecto
        necessitatibus est odio perspiciatis similique.
      </Section>
      <Section>when</Section>
      <Section>in</Section>
      <Section>view!</Section>
    </>
  );
};

export default Test;
