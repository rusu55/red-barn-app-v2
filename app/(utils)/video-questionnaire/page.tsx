"use client";
import { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { toast } from "react-hot-toast";
const VideoForm = dynamic(() => import("./components/video-form"), {
  ssr: false,
});
import { Hero } from "@/components/ui/Hero";
import aboutImage from "/public/images/about-hero.jpg";

const VideoQuestionnaire = () => {
  const [loading, isLoading] = useState(false);

  const onSubmit = (values: any) => {
    
    isLoading(true);
    axios
      .post("/api/send", values)
      .then((response) => {
        toast.success(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        isLoading(false);
      });
  };

  return (
    <div className="pt-20 md:pt-0">
      <Hero image={aboutImage} title={""} description={""} />      
        <VideoForm onSubmit={onSubmit} disabled={loading}/>    
      
    </div>
  );
};

export default VideoQuestionnaire;
