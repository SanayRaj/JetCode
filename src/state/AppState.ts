import { useReducer } from "react";
import { AppTheme } from "../types/types";

interface IState {
  theme: AppTheme;
  keybindings: string;
}

interface IAction {
  type: string;
  payload: number;
}

// const INITIAL_STATE: IState = {
//   theme: GitHubDarkTheme,
//   keybindings: "",
// };

const OpenedProjectInitialState = {
  openedEditors: [
    { name: "index.html", lang: "html", active: true },
    { name: "main.js", lang: "javascript", active: false },
    { name: "index.rs", lang: "rust", active: false },
    { name: "Main.jsx", lang: "jsx", active: false },
    { name: "tailwind.css", lang: "css", active: false },
    { name: "ThemeManager.tsx", lang: "css", active: false },
  ],
};

const OpenedProjectReducer = (
  state: typeof OpenedProjectInitialState,
  action: IAction
) => {
  switch (action.type) {
    case "TOGGLE_ACTIVE_EDITOR":
      const { payload } = action;
      if (payload >= 0 && payload < state.openedEditors.length) {
        const stateCopy = [...state.openedEditors]; // Create a shallow copy of the array
        stateCopy.forEach((editor) => {
          editor.active = false;
        });
        stateCopy[payload] = {
          ...stateCopy[payload],
          active: !stateCopy[payload].active,
        };
        return { ...state, openedEditors: stateCopy };
      }
    case "REMOVE_TAB":
      const stateCopy = [...state.openedEditors].splice(action.payload, 1);
      return {
        ...state,
        openedEditors: stateCopy,
      };
    default:
      return state;
  }
};

export const useProjectFilesReducer = () =>
  useReducer(OpenedProjectReducer, OpenedProjectInitialState);
