import { tags as t } from "@lezer/highlight";
import { AppTheme } from "../../types/types";

const GitHubDarkTheme: AppTheme = {
  theme: "dark",
  settings: {
    background: "#24292e",
    gutterBackground: "#24292e",
    foreground: "#c9d1d9",
    caret: "#c9d1d9",
    selection: "#2e639b ",
    selectionMatch: "#003d73",
    lineHighlight: "#4152665e",
  },
  styles: [
    { tag: [t.standard(t.tagName), t.tagName], color: "#7ee787" },
    { tag: [t.comment], color: "#8b949e" },
    { tag: [t.bracket], color: "#79b8ff" },
    { tag: [t.className, t.propertyName], color: "#d2a8ff" },
    {
      tag: [t.variableName, t.attributeName, t.number, t.operator],
      color: "#79c0ff",
    },
    {
      tag: [t.keyword, t.typeName, t.typeOperator, t.typeName],
      color: "#ff7b72",
    },
    { tag: [t.string, t.meta, t.regexp], color: "#a5d6ff" },
    { tag: [t.name, t.quote], color: "#7ee787" },
    { tag: [t.heading, t.strong], color: "#d2a8ff", fontWeight: "bold" },
    { tag: [t.emphasis], color: "#d2a8ff", fontStyle: "italic" },
    { tag: [t.deleted], color: "#ffdcd7", backgroundColor: "ffeef0" },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: "#ffab70" },
    { tag: t.link, textDecoration: "underline" },
    { tag: t.strikethrough, textDecoration: "line-through" },
    { tag: t.invalid, color: "#f97583" },
  ],
  appTheme: {
    background: "#24292e",
    backgroundDark: "#1f2428",
    border: "#1b1f23",
    textDim: "#959da5",
    tabBorderTopColor:'#f9826c'
  },
};

export default GitHubDarkTheme;
