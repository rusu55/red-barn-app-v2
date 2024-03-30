const videos = [
    {
      type: "video" as const,
      width: 1280,
      height: 720,
      poster:
        "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/bffe0962-e774-471b-8241-87eb2c1f10f8.jpg",
      sources: [
        {
          src:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          type: "video/mp4"
        }
      ]
    }
  ];
  
  export default videos;
  