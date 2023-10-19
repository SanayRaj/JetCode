import React, { useEffect } from "react";
import { useAppContext } from "./AppContext";

export default function ThemeManager({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentTheme } = useAppContext();
  const updateCSSVar = () => {
    const body = document.body;
    Object.entries(currentTheme.appTheme).map((v) => {
      // @ts-ignore
      body?.style?.setProperty(`--${v[0]}`, v[1]);
    });
  };
  useEffect(() => {
    updateCSSVar();
  }, [currentTheme]);
  return <>{children}</>;
}
