import React from "react";
import "./style/app.css";
import logo from "./logo.svg";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-link">React + TypeScript + Webpack</p>
        <img src={logo} alt="" />
      </header>
    </div>
  );
};

export default App;
