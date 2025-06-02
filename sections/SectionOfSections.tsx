import React from "react";

import Video from "@/components/Server/Video";
import SectionOfSectionsClient from "./SectionOfSectionsClient";

export default function SectionOfSections() {
  return (
    <div className="relative lg:mb-[25vh]">
      <div className="sticky top-0 z-10 pb-[100vh]">
        <div className="h-screen">
          <Video src="/assets/videos/hero.mp4" />
        </div>
      </div>
      <SectionOfSectionsClient />
    </div>
  );
}
