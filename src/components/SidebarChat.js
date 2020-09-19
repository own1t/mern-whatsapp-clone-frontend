// React
import React from "react";

// Material-ui
import { Avatar } from "@material-ui/core";

// CSS
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <>
      <div className="sidebarChat">
        <Avatar />

        <div className="sidebarChat__info">
          <h2>Room Name</h2>
          <p>This is the last message</p>
        </div>
      </div>
    </>
  );
}

export default SidebarChat;
