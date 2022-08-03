import React from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
