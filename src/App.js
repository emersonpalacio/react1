import React from "react";
import Login from "./pages/login/Login";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Login />
    </div>
  );
}

export default App;
