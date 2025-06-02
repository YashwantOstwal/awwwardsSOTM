// "use client";

import Label from "./Label";
import UnderlineOnHover from "./Server/UnderlineOnHover";
import * as motion from "motion/react-client";
import { cn } from "@/utils/cn";
import Link from "next/link";

type ReachOutProps = {
  className?: string;
};

export default function ReachOut({ className }: ReachOutProps) {
  return (
    <motion.div
      layoutId="reach-out"
      className={cn("relative z-20 text-off-white max-lg:py-[30px]", className)}
    >
      <Label className="mb-3 lg:mb-[1.44676vw]">
        <span className="font-light">/</span>&nbsp; Reach Out
      </Label>
      <div className="flex flex-col text-[24px] leading-[.95] font-[440] tracking-[-.01em] lg:text-[1.85185vw] lg:leading-[1.1] lg:font-[470] lg:tracking-[-0.01em]">
        <UnderlineOnHover underlineColor="#f8f8f8" className="w-fit">
          <Link href="mailto:info@thelineanimation.com%C2%A0">
            info@thelinestudio.com
          </Link>
        </UnderlineOnHover>
        <div className="flex">
          /&nbsp;
          <UnderlineOnHover underlineColor="#f8f8f8" className="w-fit">
            <Link href="tel:442030020224">44 (0)20 30020224</Link>
          </UnderlineOnHover>
        </div>
      </div>
    </motion.div>
  );
}
