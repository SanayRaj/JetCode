import React from "react";
import { useContext } from "react";
import GitHubDarkTheme from "../assets/GitHubDarkTheme";
import ThemeManager from "./ThemeManager";

const AppContext = React.createContext({
  currentWorkingDir: "",
  currentTheme: GitHubDarkTheme,
});

export const useAppContext = () => useContext(AppContext);

export const AppContextWraper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AppContext.Provider
      value={{ currentWorkingDir: "", currentTheme: GitHubDarkTheme }}
    >
      <ThemeManager>{children}</ThemeManager>
    </AppContext.Provider>
  );
};

export default AppContext;
