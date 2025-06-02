"use client";
import { cubicBezier, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Video from "./Server/Video";
import CardBoilerPlate from "./Server/CardBoilerPlate";

interface ProjectCardProps {
  videoSrc: string;
  title: string;
}

export default function ProjectCard({ videoSrc, title }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["50vh end", "50vh start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 1],
    ["55vh", "0vh", "10vh", "-30vh"],
    { ease: cubicBezier(0, 0, 0, 0) },
  );

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 1],
    ["15vw", "0vw", "0vw", "-15vw"],
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 1],
    ["15deg", "0deg", "0deg", "-7deg"],
  );
  const rotateChild = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 1],
    ["15deg", "2deg", "0deg", "4deg"],
  );
  const xChild = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 1],
    ["5vw", "2vw", "0vw", "4vw"],
  );
  const yChild = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 1],
    ["25vh", "16vh", "0vh", "35vh"],
  );

  return (
    <>
      <div ref={cardRef} className="relative z-10 max-h-[50vh]">
        <motion.div
          style={{ x, y, rotate }}
          className="flex h-screen origin-bottom-right flex-col gap-[0.46296vw] bg-[#dfdfe3f2] lg:origin-[0%_25%]"
        >
          <div className="flex items-end justify-between px-2 max-lg:flex-[0.25] max-lg:pb-5 lg:px-[0.46296vw] lg:pt-[2.31481vw] lg:pb-[0.49296vw]">
            <h1 className="max-w-3/5 text-[34px] leading-[0.8] font-normal tracking-[-0.04em] text-void-black lg:text-[5.55556vw] lg:font-[470]">
              {title}
            </h1>
            {/* <Button >View Projects</Button> */}
          </div>
          <div className="relative flex-[0.75] lg:flex-1">
            <CardBoilerPlate />
            <motion.div
              style={{ x: xChild, y: yChild, rotate: rotateChild }}
              className="h-full w-full"
            >
              <Video src={videoSrc} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
