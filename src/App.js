import React from "react";
import CrudApi from "./components/CrudApi";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <CrudApi />
    </div>
  );
}

export default App;
