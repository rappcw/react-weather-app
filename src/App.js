import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Background">
        <Weather userCity="Perth" />
      </div>
    </div>
  );
}
