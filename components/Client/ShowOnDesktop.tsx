"use client";

import { useIsDesktop } from "@/app/providers/root/WindowSizeProvider";
import React, { ReactNode } from "react";

interface ShowOnDesktopProps {
  children: ReactNode;
  mobileFallBack?: ReactNode;
}

export default function ShowOnDesktop({
  children,
  mobileFallBack,
}: ShowOnDesktopProps) {
  const isDesktop = useIsDesktop();
  if (!isDesktop) return mobileFallBack || null;
  return <>{children}</>;
}
