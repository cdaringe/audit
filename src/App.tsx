import { h } from "preact";
import "./App.css";
import Checklist from "./Checklist";
import { useFadeInApp } from "./hooks/useFadeInApp";
import Theme from "./theme/Provider";

function App() {
  const isFadeReady = useFadeInApp();
  return (
    <Theme>
      <div className="App" style={{ opacity: isFadeReady ? 1 : 0 }}>
        <Checklist />
      </div>
    </Theme>
  );
}

export default App;
