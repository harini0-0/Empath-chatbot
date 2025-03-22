import './App.css';
import React from "react";
import ChatArea from "./components/ChatArea";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='leftbar' style={{float: "left"}}>
        <Sidebar />
      </div>
        <ChatArea />
    </div>
  );
}

export default App;
