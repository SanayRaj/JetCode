import ToolBar from "./components/ToolBar";
import { AppContextWraper } from "./state/AppContext";
import ThemeManager from "./state/ThemeManager";
import Editor from "./components/Editor";

// CSS
import "./main.css";
import "@vscode/codicons/dist/codicon.css";
import "@ionic/react/css/core.css";
import { IonApp } from "@ionic/react";

const App: React.FC = () => {
  return (
    <IonApp>
      <AppContextWraper>
        <ThemeManager>
          <div className="bg-[var(--background)] h-screen overflow-hidden">
            <ToolBar />
            <Editor />
          </div>
        </ThemeManager>
      </AppContextWraper>
    </IonApp>
  );
};

export default App;
