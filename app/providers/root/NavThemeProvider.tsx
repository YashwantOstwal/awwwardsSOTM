"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type NavTheme = "light" | "dark";
interface NavThemeContextType {
  navTheme: NavTheme;
  setNavTheme: Dispatch<SetStateAction<NavTheme>>;
}

const NavThemeContext = createContext<NavThemeContextType>({
  navTheme: "dark",
  setNavTheme: () => {},
});

export function NavThemeProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [navTheme, setNavTheme] = useState<NavTheme>("light");
  return (
    <NavThemeContext.Provider value={{ navTheme, setNavTheme }}>
      {children}
    </NavThemeContext.Provider>
  );
}

export const useNavThemeValue = () => useContext(NavThemeContext).navTheme;
export const useSetNavTheme = () => useContext(NavThemeContext).setNavTheme;
