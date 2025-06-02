"use client";
import { useNavThemeValue } from "../providers/root/NavThemeProvider";
import { cn } from "@/utils/cn";
import * as motion from "motion/react-client";
import Label from "@/components/Label";
import Link from "next/link";
import UnderlineOnHover from "@/components/Server/UnderlineOnHover";

export default function Page() {
  const currentNavTheme = useNavThemeValue();
  return (
    <motion.div
      className={cn(
        "grid h-screen place-items-center",
        currentNavTheme === "dark" ? "bg-off-white" : "bg-void-black",
      )}
    >
      <UnderlineOnHover underlineColor="#ff391e ">
        <Label className="font-[440] tracking-[-0.03em] text-flare-red uppercase lg:text-[2.31481vw]">
          <Link href="/">← Back to Home</Link>
        </Label>
      </UnderlineOnHover>
    </motion.div>
  );
}
