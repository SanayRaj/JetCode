import React from "react";
import { Tab, TabContainer } from "./ui/Tab";
import { useProjectFilesReducer } from "../state/AppState";

const TOOLBAR_HEIGHT = 80;

export default function ToolBar() {
  const [state, dispatch] = useProjectFilesReducer();

  const toggleTab = (i: number) => {
    dispatch({ type: "TOGGLE_ACTIVE_EDITOR", payload: i });
  };
  return (
    <div
      className="bg-[var(--background)] flex flex-col justify-end"
      style={{ height: TOOLBAR_HEIGHT }}
    >
      <div className="flex items-center px-2" style={{ height: TOOLBAR_HEIGHT / 2 }}>
        <i className="codicon codicon-menu p-2"></i>
        ToolBar
      </div>
      <TabContainer>
        {state.openedEditors.map((v, i) => (
          <Tab
            title={v.name}
            active={v.active}
            onClose={() => toggleTab(i)}
            onClick={() => toggleTab(i)}
          />
        ))}
      </TabContainer>
    </div>
  );
}
