"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import { toast } from "react-hot-toast";
import { format } from "date-fns";
const BridalForm = dynamic(() => import("./components/bridal-form"), {
  ssr: false,
});
import { Hero } from "@/components/ui/Hero";
import aboutImage from "/public/images/about-hero.webp";

const BridalPage = () => {
  const [loading, isLoading] = useState(false);
 

  const router = useRouter();

  const onSubmit = (values: any) => {
    isLoading(true);
    
    axios
      .post("/api/bridal", values)
      .then((response) => {
        toast.success("Form was successful sent!");
      })
      .catch((error) => {
        console.log("Questionaire was not sent!");
      })
      .finally(() => {
        isLoading(false);
        router.push("/");
      });

  };

  return (
    <div className="pt-20 md:pt-0">
      <Hero image={aboutImage} title={""} description={""} />
      <BridalForm onSubmit={onSubmit} disabled={loading} />
    </div>
  );
};

export default BridalPage;
