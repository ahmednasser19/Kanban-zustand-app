import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div className="App">
      <Column state="PLANNED" />
      <Column state="INGOING" />
      <Column state="DONE" />
    </div>
  );
}

export default App;
