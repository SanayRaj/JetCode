import { CreateThemeOptions } from "@uiw/codemirror-themes";

export interface AppTheme extends CreateThemeOptions {
  appTheme: {
    background: string;
    border: string;
    backgroundDark: string;
    textDim: string;
    tabBorderTopColor: string;
  };
}
