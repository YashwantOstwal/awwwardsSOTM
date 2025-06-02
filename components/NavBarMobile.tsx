import { Dispatch, SetStateAction } from "react";
import Close from "./SVGs/Close";
import Burger from "./SVGs/Burger";

export default function NavBarMobile({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      aria-label="Open/Close sidebar"
      className="h-[14px] w-13"
    >
      {isMobileMenuOpen ? <Close /> : <Burger />}
    </button>
  );
}
