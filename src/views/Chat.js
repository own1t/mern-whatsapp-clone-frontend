// React
import React, { useState } from "react";

// Material-ui
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";

// Axios
import axios from "../axios";

// CSS
import "./Chat.css";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/api/messages/new", {
      message: input,
      name: "ownit",
      timestamp: Date.now(),
      received: false,
    });

    setInput("");
  };

  return (
    <>
      <div className="chat">
        <div className="chat__header">
          <Avatar />

          <div className="chat__headerInfo">
            <h3>Room Name</h3>
            <p>Last seen at...</p>
          </div>

          <div className="chat__headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>

            <IconButton>
              <AttachFile />
            </IconButton>

            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>

        <div className="chat__body">
          {messages.map((message) => (
            <p
              className={`chat__message ${
                message.received && "chat__receiver"
              }`}
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
            </p>
          ))}
        </div>

        <div className="chat__footer">
          <InsertEmoticon />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
            />
            <button type="submit">Send</button>
          </form>
          <Mic />
        </div>
      </div>
    </>
  );
}

export default Chat;
