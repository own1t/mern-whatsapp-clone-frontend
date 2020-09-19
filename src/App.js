// React
import React from "react";

// CSS
import "./App.css";

// Components
import Sidebar from "./components/Sidebar";
import Chat from "./views/Chat";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
