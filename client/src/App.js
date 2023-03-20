import "./App.css";
import Application from "./components/Application/Application";
import Candidates from "./components/Candidates/Candidates";
import { ApplicationProvider } from "./providers/ApplicationProvider";
import { GeneralProvider } from "./providers/GeneralProvider";

function App() {
  return (
    <GeneralProvider>
      <ApplicationProvider>
        <div className="App">
          <h1>Samwell Test</h1>
          <Candidates />
          <Application />
        </div>
      </ApplicationProvider>
    </GeneralProvider>
  );
}

export default App;
