import Label from "@/components/Label";
import Header from "@/components/Server/SectionHeader";
import Image, { StaticImageData } from "next/image";
import CollaborationRiotGames from "@/public/assets/images/news/collaboration.png";
import LineEditions from "@/public/assets/images/news/line-editions.png";
import { Fragment, ReactNode } from "react";
import Button from "@/components/Client/Button";
import * as motion from "motion/react-client";
import CursorPlane from "@/components/CursorPlane";
import Link from "next/link";

export default function News() {
  const listItems = [
    {
      href: "https://thelinestudio.com/blog/the-line-partners-with-riot-games-to-bring-spirit-blossom-festival-to-life",
      imgSrc: CollaborationRiotGames,
      label: (
        <>
          <span className="font-light">/</span>&nbsp;STUDIO NEWS&nbsp;
          <span className="font-light">/</span>&nbsp; 14/04/2025
        </>
      ),
      title:
        "THE LINE PARTNERS WITH RIOT GAMES ON LEAGUE OF LEGENDS MUSIC VIDEO",
      description: {
        desktop: [
          <Fragment key="d1">
            We are proud to unveil our latest collaboration with Riot Games: a
            breathtaking
          </Fragment>,
          <Fragment key="d2">
            three-minute music video to celebrate the release of a brand-new set
            of Spirit
          </Fragment>,
          <Fragment key="d3">Blossom skins in League of Legends.</Fragment>,
        ],
        mobile:
          "We are proud to unveil our latest collaboration with Riot Games: a breathtaking three-minute music video to celebrate the release of a brand-new set of Spirit Blossom skins in League of Legends.",
      },
    },
    {
      imgSrc: LineEditions,
      href: "https://thelinestudio.com/blog/editions-drop-001",
      label: (
        <>
          <span className="font-light">/</span>&nbsp; STUDIO NEWS&nbsp;
          <span className="font-light">/</span>&nbsp; 07/04/2025
        </>
      ),
      title: "INTRODUCING/ THE LINE EDITIONS",
      description: {
        desktop: [
          <Fragment key="d1">
            Our limited edition store! Something we've been working on for a
            longggg time.
          </Fragment>,
        ],
        mobile:
          "Our limited edition store! Something we've been working on for a longggg time.",
      },
    },
  ];
  return (
    <div className="relative z-10 bg-off-white px-2 pt-2 lg:px-[0.46296vw] lg:pt-[0.46296vw]">
      <Header label="From the Studio" title="News" />
      <div className="mt-[158px] mb-[15px] lg:mt-[18.51852vw] lg:mb-[1.04167vw]">
        <Button href="https://thelinestudio.com/blog">
          <span className="relative">
            See All
            <span className="absolute top-0 left-full ml-[3px] text-[0.70vw] leading-[1.75] font-[440] tracking-[-.01em]">
              [&nbsp;10&nbsp;]
            </span>
          </span>
        </Button>
      </div>
      <div className="flex flex-col gap-[120px] lg:flex-row lg:gap-[0.46296vw]">
        {listItems.map((eachListItem, index) => (
          <News.NewsListItem
            key={"list-item-" + (index + 1)}
            {...eachListItem}
          />
        ))}
      </div>
    </div>
  );
}
News.NewsListItem = ({
  label,
  title,
  description,
  imgSrc,
  href,
}: {
  label: ReactNode;
  title: string;
  description: {
    desktop: ReactNode[];
    mobile: string;
  };
  imgSrc: StaticImageData;
  href: string;
}) => (
  <Link href={href} className="flex-1 cursor-pointer">
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className="flex-1 cursor-pointer"
    >
      <div className="relative mb-[5px] aspect-[390/249] max-lg:-mx-2 lg:mb-[.23148vw]">
        <Image
          src={imgSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
        <CursorPlane className="text-white">read more</CursorPlane>
      </div>
      <Label>{label}</Label>
      <p className="py-2.5 text-[32px] leading-[0.85] font-[440] tracking-[-0.03em] lg:max-w-[80%] lg:py-[0.46296vw] lg:text-[2.31481vw]">
        {title}
      </p>
      <div className="pointer-events-none max-w-[330px] text-[16px] leading-[1.1] font-[440] tracking-[-0.01em] lg:max-w-[31.25vw] lg:text-[.92593vw]">
        <motion.div
          variants={{
            whileHover: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="hidden lg:block"
        >
          {description.desktop.map((paragraph, index) => (
            <motion.p
              variants={{
                initial: { opacity: 0, y: "0%" },
                whileHover: { opacity: 1, y: ["100%", "0%"] },
              }}
              transition={{
                duration: 0.8,
                ease: [0.19, 1, 0.22, 1],
              }}
              key={"d-" + (index + 1)}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
        <p className="lg:hidden">{description.mobile}</p>
      </div>
    </motion.div>
  </Link>
);
