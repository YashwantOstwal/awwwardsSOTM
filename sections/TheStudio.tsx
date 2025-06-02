"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Header from "@/components/Server/SectionHeader";
import Image from "next/image";
import TheLineCollections from "@/public/assets/images/the-studio/the-line-collections.png";
import Desk from "@/public/assets/images/the-studio/desk.png";
import Label from "@/components/Label";
import StyledLink from "@/components/Server/StyledLink";
import { cn } from "@/utils/cn";

export default function TheStudio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["50vh end", "100vh end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["50vh", "0vh"]);
  const rotate = useTransform(scrollYProgress, [0, 0.3], ["7deg", "0deg"]);
  const x = useTransform(scrollYProgress, [0, 0.3], ["-10%", "0%"]);
  const awards = [
    { label: "BAFTA", href: "" },
    { label: "AD YOUNG GUN AWARD", href: "" },
    { label: "BRITISH ANIMATION AWARDS", href: "" },
    { label: "ANNECY", href: "" },
    { label: "CLIO", href: "" },
    { label: "BRITISH ARROWS", href: "" },
    { label: "LONDON MUSIC VIDEO AWARDS", href: "" },
    { label: "D&AD", href: "" },
  ];
  const mediaFeatures = [
    "GQ",
    "NME",
    "THE VERGE",
    "VARIETY",
    "THE HOLLYWOOD REPORTER",
    "THE LOS ANGELES TIMES",
    "THE TONIGHT SHOW WITH JIMMY FALLON",
    "BBC",
    "WIRED MAGAZINE",
    "THE INDEPENDENT",
    "THE SUNDAY TIMES",
    "ROLLING STONE",
    "THE TELEGRAPH",
    "PLAYBOY",
    "COSMOPOLITAN",
    "E ONLINE",
    "NERDIST",
    "NBC NEWS",
    "POLYGON",
    "HYPEBEAST",
  ];

  return (
    <div ref={ref} className="pointer-events-none relative z-40">
      <motion.div
        style={{ x, y, rotate }}
        className="pointer-events-auto origin-[0%_0%] overflow-hidden bg-off-white max-lg:pt-2 lg:origin-[0%_50%]"
      >
        <Header label="Make your mark" title="The Studio" />
        <div className="mt-[158px] flex flex-col lg:mt-[18.5182vw] lg:flex-row lg:px-[0.46296vw]">
          <ImageContainer className="lg:flex-[0.55]" />
          <div className="max-lg:px-2 max-lg:pt-20 lg:flex-[0.45]">
            <Label className="slash-before mb-4 lg:mb-[0.92592vw]">
              The lowdown
            </Label>
            <p className="mb-16 text-[24px] leading-[1.1] font-[470] tracking-[-0.01em] lg:mb-[3.7037vw] lg:max-w-[37.26852vw] lg:text-[1.62037vw] lg:font-normal">
              We’re a globally renowned animation studio based in East LDN. We
              work across advertising interactive media, music videos and our
              own original content.
            </p>
            <Label className="slash-before mb-4 lg:mb-[0.92592vw]">
              Awards & Mentions
            </Label>
            <div className="grid grid-rows-[auto_auto] gap-2 text-base leading-[1.1] font-[440] tracking-[-0.01em] lg:grid-cols-2 lg:gap-[0.46296vw] lg:text-[0.92593vw]">
              <div className="space-y-[.11574vw]">
                {awards.map(({ label, href }, i) => (
                  <StyledLink key={`awards[${i}]`} href={href}>
                    {label}
                  </StyledLink>
                ))}
              </div>
              <div className="space-y-[.11574vw]">
                {mediaFeatures.map((feature, i) => (
                  <div key={`mediaFeatures[${i}]`}>{feature}</div>
                ))}
              </div>
            </div>
            <div className="mt-16 space-y-[3px] lg:mt-[3.7037vw] lg:space-y-[0.34722vw]">
              <p className="text-[32px] leading-[0.85] font-[440] tracking-[-0.03em] lg:text-[2.31481vw]">
                “BELLISSIMO”
              </p>
              <p className="pl-[15px] text-xs leading-[1.1667] font-[440] tracking-[-0.01em] lg:pl-[0.86806vw] lg:text-[0.69444vw]">
                – GUILLERMO DEL TORO
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ImageContainer({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "0.8 end"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["25%", "45%"]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], ["8deg", "4.89deg"]);

  const x2 = useTransform(scrollYProgress, [0, 1], ["-45%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], ["4.89deg", "0deg"]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <motion.div
        style={{ x: x1, y: y1, rotate: rotate1 }}
        className="max-w-4/5 lg:max-w-3/5"
      >
        <Image src={Desk} alt="desk" className="h-auto w-full" />
      </motion.div>
      <motion.div
        style={{ x: x2, y: y2, rotate: rotate2 }}
        className="absolute top-0 w-full max-w-4/5 lg:max-w-3/5"
      >
        <Image
          src={TheLineCollections}
          alt="the-line-collections"
          className="h-auto w-full"
        />
      </motion.div>
    </div>
  );
}
