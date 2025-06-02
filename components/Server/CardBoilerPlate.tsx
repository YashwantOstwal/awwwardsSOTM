import { CSSProperties, ReactNode } from "react";
import Cross from "../SVGs/Cross";
import TwoEndedArrow from "../SVGs/DoubleEndedArrow";
import { cn } from "@/utils/cn";
import Label from "../Label";

function CardBoilerPlate() {
  return (
    <div className="absolute inset-0 mx-2 border-[1.5px] border-dashed border-void-black p-[42px] lg:mx-[0.46296vw] lg:p-[3.47222vw]">
      <CardBoilerPlate.Label top left>
        Overscan
      </CardBoilerPlate.Label>
      <CardBoilerPlate.Label top right>
        1353&nbsp;
        <Cross />
        804
      </CardBoilerPlate.Label>
      <div className="relative h-full w-full border-[1.5px] border-void-black px-[78px] py-[68px] lg:px-[2.19908vw] lg:py-[1.62037vw]">
        <CardBoilerPlate.Label className="bottom-full -left-4 -translate-y-1 lg:left-[-0.77361vw]">
          <TwoEndedArrow />
          &nbsp;[ 16:9 ]
        </CardBoilerPlate.Label>
        <CardBoilerPlate.Label top left>
          Crop
        </CardBoilerPlate.Label>

        <CardBoilerPlate.Label top right>
          1241&nbsp;
          <Cross />
          692
        </CardBoilerPlate.Label>
        <CardBoilerPlate.Label bottom right>
          100%
        </CardBoilerPlate.Label>
        <div className="relative h-full w-full border-[1.5px] border-dashed border-void-black">
          <CardBoilerPlate.Label top left>
            Action safe
          </CardBoilerPlate.Label>
          <CardBoilerPlate.Label top right>
            1176&nbsp;
            <Cross />
            638
          </CardBoilerPlate.Label>
        </div>
      </div>
    </div>
  );
}
CardBoilerPlate.Label = function CardBoilerPlateLabel({
  top = false,
  bottom = false,
  left = false,
  right = false,
  children,
  className,
  style,
}: {
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Label
      style={{ ...style }}
      className={cn(
        "absolute flex items-center text-xs leading-[1.1667] font-medium tracking-[-.01em] uppercase lg:text-[.69444vw]",
        left && "left-1 lg:left-[0.46296vw]",
        right && "right-1 lg:right-[0.46296vw]",
        top && "top-0.5 lg:top-[0.23148vw]",
        bottom && "bottom-0.5 lg:bottom-[0.23148vw]",
        className,
      )}
    >
      {children}
    </Label>
  );
};

export default CardBoilerPlate;
