"use client";
import { useCursor } from "@/hooks/useCursor";
import Cursor from "./Cursor";
import Label from "./Label";
import { useIsDesktop } from "@/app/providers/root/WindowSizeProvider";
import { cn } from "@/utils/cn";

function CursorPlane({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const isDesktop = useIsDesktop();
  const { cursorPlaneHandlers, cursorProps } = useCursor<HTMLDivElement>();
  if (!isDesktop) {
    return null;
  }
  return (
    <div {...cursorPlaneHandlers} className={cn("absolute inset-0", className)}>
      <Cursor {...cursorProps} className="translate-x-1/2">
        <Label>{children}</Label>
      </Cursor>
    </div>
  );
}

export default CursorPlane;
