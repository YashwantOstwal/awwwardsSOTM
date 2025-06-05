import React from "react";

import Video from "@/components/Server/Video";
import GroupClient from "./GroupClient";

export default function Group() {
  return (
    <div className="relative max-w-screen overflow-x-clip lg:mb-[25vh]">
      <div className="sticky top-0 z-10 pb-[100vh]">
        <div className="h-screen">
          <Video src="/assets/videos/hero.mp4" />
        </div>
      </div>
      <GroupClient />
    </div>
  );
}
