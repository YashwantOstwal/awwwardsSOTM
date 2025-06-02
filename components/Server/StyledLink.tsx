import { cn } from "@/utils/cn";
import { cubicBezier } from "motion";
import * as motion from "motion/react-client";
import Link from "next/link";
interface StyledLinkProps {
  children: string;
  href: string;
  className?: string;
  underlineColor?: string;
}

function StyledLink({
  children,
  href,
  className,
  underlineColor,
}: StyledLinkProps) {
  return (
    <Link href={href}>
      <motion.div
        initial="initial"
        whileHover="whileHover"
        className={cn("relative w-fit cursor-pointer", className)}
      >
        <span>{children}</span>
        <motion.div
          style={{ backgroundColor: `${underlineColor || "#0b0b0b"}` }}
          className="absolute bottom-0 h-px bg-void-black"
          variants={{
            whileHover: {
              width: "0%",
              right: "0%",
              left: "auto",
            },
            initial: {
              width: "100%",
              left: "0px",
              right: "auto",
            },
          }}
          transition={{
            left: {
              duration: 0,
            },
            right: {
              duration: 0,
            },
            default: {
              duration: 0.8,
              ease: cubicBezier(0.19, 1, 0.22, 1),
            },
          }}
        />
      </motion.div>
    </Link>
  );
}

export default StyledLink;
