"use client";
import { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { toast } from "react-hot-toast";
const VideoForm = dynamic(() => import("./components/video-form"), {
  ssr: false,
});

const VideoQuestionnaire = () => {
  const [loading, isLoading] = useState(false);

  const onSubmit = (values: any) => {
    console.log(values);
    isLoading(true);
    axios
      .post("/api/video", values)
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
    <>
      <VideoForm onSubmit={onSubmit} />
    </>
  );
};

export default VideoQuestionnaire;
