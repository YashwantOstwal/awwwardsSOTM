import { ReactNode } from "react";
import { NavThemeProvider } from "./NavThemeProvider";
import { WindowSizeProvider } from "./WindowSizeProvider";
export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <WindowSizeProvider>
      <NavThemeProvider>{children}</NavThemeProvider>
    </WindowSizeProvider>
  );
}
