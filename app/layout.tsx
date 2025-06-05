import "./globals.css";
import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import RootProviders from "./providers/root";
const DenimVF = localFont({
  src: "./fonts/DenimVF.woff",
  variable: "--font-denim",
});

export const metadata: Metadata = {
  title: "Awwwards SOTM",
  description: "Pixel Perfect clone of an awwwards 'Site of the month'",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <RootProviders>
          <body
            className={`${DenimVF.variable} overflow-x-clip antialiased [text-rendering:optimizeLegibility] selection:bg-flare-red selection:text-off-white`}
          >
            <NavBar />
            {children}
          </body>
        </RootProviders>
      </ReactLenis>
    </html>
  );
}
