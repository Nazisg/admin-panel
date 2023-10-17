import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
