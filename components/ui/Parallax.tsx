import { ParallaxBanner } from "react-scroll-parallax";

export const ParallaxComponent: React.FC<React.ReactNode> = ({children}: any) => {
    return (
      <ParallaxBanner
        layers={[{ image: "/images/img-2.jpg", speed: -25 }]}
        className="h-[300px] md:h-[500px]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </ParallaxBanner>
    );
  };