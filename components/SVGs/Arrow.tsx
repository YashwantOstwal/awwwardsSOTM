import { cn } from "@/utils/cn";
import { MotionProps } from "motion/react";
import * as motion from "motion/react-client";
import { ComponentProps } from "react";
const Arrow = ({ className, ...rest }: MotionProps & ComponentProps<"svg">) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 19"
    width="22"
    height="19"
    fill="#0b0b0b"
    className={cn("", className)}
    {...rest}
  >
    <path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z"></path>
  </motion.svg>
);

export default Arrow;
