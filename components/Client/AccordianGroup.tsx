"use client";
import { Dispatch, ReactNode, SetStateAction } from "react";
import AccordianItem from "@/components/AccordianItem";
import Link from "next/link";

export default function AccordianGroup({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}) {
  const addressLines = [
    "The Line Animation Studio Ltd",
    "Studio 02",
    "De Beauvoir Block, 92–96",
    "De Beauvoir Road",
    "London, N1 4EN",
  ];

  const socialMediaLinks = [
    { name: "YouTube", href: "https://www.youtube.com/THELINEanimation" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/thelineanimation/",
    },
    { name: "TikTok", href: "https://www.tiktok.com/@thelineanimation" },
    { name: "X", href: "https://x.com/thelinestudio" },
    { name: "Facebook", href: "https://www.facebook.com/thelineanimation" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/the-line-studio/",
    },
  ];
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Entertainment", href: "/entertainment" },
    { label: "About", href: "/about" },
    { label: "Feed", href: "/blog" },
    { label: "Podcast", href: "/podcast" },
    { label: "Contact", href: "/contact" },
    { label: "Shop", href: "/shop" },
  ];
  const accordianItems: { label: string; content: ReactNode }[] = [
    {
      label: "Find",
      content: (
        <Link href="" className="flex flex-col">
          {addressLines.map((eachLine, i) => (
            <span key={`addressLines[${i}]`}>{eachLine}</span>
          ))}
        </Link>
      ),
    },
    {
      label: "Social",
      content: (
        <>
          {socialMediaLinks.map(({ name, ...href }, i) => (
            <Link key={`socialMedia[${i}]`} {...href}>
              {name}
            </Link>
          ))}
        </>
      ),
    },
    {
      label: "Nav",
      content: (
        <>
          {navItems.map(({ label, ...href }, i) => (
            <Link key={`navItems[${i}]`} {...href}>
              {label}
            </Link>
          ))}
        </>
      ),
    },
  ];

  return (
    <>
      {accordianItems.map(({ label, content }, index) => (
        <AccordianItem
          key={index}
          label={label}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          {content}
        </AccordianItem>
      ))}
    </>
  );
}
