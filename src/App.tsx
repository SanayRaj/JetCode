import ToolBar from "./components/ToolBar";
import { AppContextWraper } from "./state/AppContext";
import ThemeManager from "./state/ThemeManager";

// CSS
import "./main.css";
import "@vscode/codicons/dist/codicon.css";
import Editor from "./components/Editor";

const App: React.FC = () => {
  return (
    <AppContextWraper>
      <ThemeManager>
        <div className="bg-[var(--background)] h-screen overflow-hidden">
          <ToolBar />
          <Editor />
        </div>
      </ThemeManager>
    </AppContextWraper>
  );
};

export default App;
