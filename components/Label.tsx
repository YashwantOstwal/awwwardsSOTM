import { cn } from "@/utils/cn";
import { ComponentProps, PropsWithChildren } from "react";
type LabelProps = PropsWithChildren &
  ComponentProps<"span"> & {
    className?: string;
  };

const Label = ({ children, className, ...rest }: LabelProps) => (
  <span
    className={cn(
      "flex items-center text-xs leading-[1.1667] font-[440] tracking-[-0.01em] uppercase xl:text-[0.69444vw]",
      className,
    )}
    {...rest}
  >
    {children}
  </span>
);

export default Label;
