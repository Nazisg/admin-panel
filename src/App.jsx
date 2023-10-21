import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal]=useState(false)

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <Content setShowModal={setShowModal}/>
      </div>
      {showModal?  <Modal/>:null}
    </div>
  );
}

export default App;
