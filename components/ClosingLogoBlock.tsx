import LogoWithTrademark from "./SVGs/LogoWithTrademark";
import { cn } from "@/utils/cn";

interface ClosingLogoBlockProps {
  className?: string;
}

export default function ClosingLogoBlock({ className }: ClosingLogoBlockProps) {
  return (
    <div
      className={cn(
        "px-2 pt-[250px] pb-2 lg:px-[0.46296vw] lg:pt-[17.36111vw] lg:pb-[0.46296vw]",
        className,
      )}
    >
      <LogoWithTrademark className="h-auto w-full" />
    </div>
  );
}
