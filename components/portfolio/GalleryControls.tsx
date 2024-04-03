import React from "react";
import clsx from "clsx";
import { Button } from "../ui/Button";

export const GalleryControls = ({ onChange, active }: any) => {
  return (
    <div className="px-4 pt-10 sm:px-6 sm:pt-28 lg:px-8 lg:pt-8 flex flex-col md:flex-row items-center justify-center">
      <Button
        variant="secondary"
        className={clsx("uppercase", active === "all" && "bg-roze text-white")}
        onClick={() => onChange("all")}
      >
        All
      </Button>
      <Button
        variant="secondary"
        className={clsx(
          "uppercase",
          active === "Wedding" && "bg-roze text-white"
        )}
        onClick={() => onChange("Wedding")}
      >
        Weddings
      </Button>
      <Button
        variant="secondary"
        className={clsx(
          "uppercase",
          active === "Engagement" && "bg-roze text-white"
        )}
        onClick={() => onChange("Engagement")}
      >
        Engagements
      </Button>
      <Button
        variant="secondary"
        className={clsx(
          "uppercase",
          active === "Cinematography" && "bg-roze text-white"
        )}
        onClick={() => onChange("Cinematography")}
      >
        Cinematography
      </Button>
    </div>
  );
};
