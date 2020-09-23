import React from "react";
import "./App.css";
import { Clock } from "./components/Clock";
import { Timer } from "./components/Timer";
import { ToDo } from "./components/ToDo";

function App() {
  const name = "Peter";
  const element = <h2>Hello, {name}! How are you?</h2>;

  return (
    <div className="App">
      {element}
      <Clock />
      <Timer />
      <ToDo />
    </div>
  );
}

export default App;
