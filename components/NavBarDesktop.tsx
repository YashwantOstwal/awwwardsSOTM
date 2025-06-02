"use client";
import Link from "next/link";
import List from "./List";
import HoverReveal from "./HoverReveal";
import NavItem from "./NavItem";
import OpenTimings from "./OpenTimings";
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

export default function NavBarDesktop() {
  return (
    <>
      <OpenTimings />

      <HoverReveal
        className="max-lg:hidden"
        beforeHover="LONDON,ENGLAND"
        afterHover={
          <Link href="mailto:info@thelinestudio.com">
            info@thelinestudio.com
          </Link>
        }
      />

      <div className="col-span-5 flex items-center justify-end gap-[0.28935vw]">
        <List>
          {navItems.map((eachNavItem) => (
            <NavItem key={eachNavItem.href} {...eachNavItem} />
          ))}
        </List>
      </div>
    </>
  );
}
