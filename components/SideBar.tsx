"use client";
import { AnimatePresence, cubicBezier, motion } from "motion/react";
import Image from "next/image";
import BackgroundImage from "@/public/assets/images/side-bar-background.png";
import Link from "next/link";
import Label from "./Label";
import NavItem from "./NavItem";
import Arrow from "./SVGs/Arrow";

export default function SideBar({
  isMobileMenuOpen,
  isDesktop,
}: {
  isMobileMenuOpen: boolean;
  isDesktop: boolean | null;
}) {
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
  return (
    <AnimatePresence>
      {isDesktop == false && isMobileMenuOpen && (
        <motion.div
          initial={{ x: "20%", y: "-110%", rotate: "8deg" }}
          animate={{ x: "0%", y: "0%", rotate: "0deg" }}
          exit={{ x: "20%", y: "-110%", rotate: "8deg" }}
          transition={{
            duration: 0.8,
            ease: cubicBezier(0.14, 1, 0.34, 1),
          }}
          className="fixed top-0 z-[50] h-screen w-full bg-cool-gray"
        >
          <motion.div
            initial={{ x: "30%", y: "-80%", rotate: "14deg" }}
            animate={{ x: "0%", y: "0%", rotate: "0deg" }}
            exit={{ x: "30%", y: "-80%", rotate: "14deg" }}
            transition={{
              duration: 0.8,
              ease: cubicBezier(0.14, 1, 0.34, 1),
              delay: 0.1,
            }}
            className="flex h-screen w-full flex-col justify-between bg-flare-red p-2 text-off-white"
          >
            <div className="absolute inset-x-0 bottom-0 z-10 opacity-50 [mix-blend-mode:multiply]">
              <Image className="h-auto w-full" src={BackgroundImage} alt="" />
            </div>
            <div className="relative z-20 px-2 py-[70px]">
              {navItems.map((eachNavItem) => (
                <NavItem key={eachNavItem.href} {...eachNavItem} />
              ))}
            </div>
            <div className="relative z-20 space-y-[14px] pb-1.5">
              <Label>
                <span className="font-light">/&nbsp;</span>
                {"Let's talk"}
              </Label>
              <Link
                className="relative flex items-center justify-between text-[24px] leading-[0.95] font-[440] tracking-[-0.01em]"
                href="mailto:info@thelineanimation.com"
              >
                <span>info@thelineanimation.com</span>
                <Arrow fill="#f8f8f8" />
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-off-white" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
