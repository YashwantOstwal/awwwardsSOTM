import Label from "@/components/Label";
import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("px-2 lg:px-[0.46296vw] lg:pt-[0.46296vw]", className)}>
      <Label className="slash-before">{label}</Label>
      <h1 className="pt-[5px] pr-5 text-[72px] leading-[0.8] font-medium tracking-[-0.04em] lg:text-[12.15278vw]">
        {title}
      </h1>
    </div>
  );
}
