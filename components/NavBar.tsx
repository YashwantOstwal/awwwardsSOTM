"use client";
import { motion } from "motion/react";
import Logo from "./SVGs/Logo";
import Link from "next/link";
import { useIsDesktop } from "@/app/providers/root/WindowSizeProvider";
import { useState } from "react";
import { useNavThemeValue } from "@/app/providers/root/NavThemeProvider";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import SideBar from "./SideBar";

export default function NavBar() {
  const isDesktop = useIsDesktop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navTheme = useNavThemeValue();

  return (
    <>
      <motion.div
        initial={navTheme}
        animate={navTheme}
        variants={{ light: { color: "#f8f8f8" }, dark: { color: "#0b0b0b" } }}
        className="fixed top-0 z-[60] flex w-full p-2 max-lg:justify-between lg:grid lg:grid-cols-9 lg:gap-x-[.46296vw] lg:p-[0.46296vw]"
      >
        <Link
          className="col-span-2 h-[22px] w-[126px] lg:h-[1.27315vw] lg:w-[7.29167vw]"
          href="https://thelinestudio.com/"
          aria-label="The Line Studio"
        >
          <Logo />
        </Link>
        {typeof isDesktop == "boolean" &&
          (isDesktop ? (
            <NavBarDesktop />
          ) : (
            <NavBarMobile
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          ))}
      </motion.div>
      <SideBar isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
    </>
  );
}
