'use client';
import { useState } from "react";
import axios from 'axios';
import dynamic from "next/dynamic";
const VideoForm= dynamic(
  () => import('./components/video-form'),
  { 
    ssr: false,    
  }
);


const VideoQuestionnaire = () => {
  const [loading, isLoading] = useState(false);

  const onSubmit = (values: any) =>{
    isLoading(true);
    axios
      .post("", values)
      .then(()=>{

      })
      .catch(()=>{

      })
      .finally(()=>{
        isLoading(false)
      })
    
  };

  return (
    <>
        <VideoForm onSubmit={onSubmit}/>
    </>
  )
}

export default VideoQuestionnaire