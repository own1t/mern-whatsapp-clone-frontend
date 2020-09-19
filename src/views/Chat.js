// React
import React from "react";

// Material-ui
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";

// CSS
import "./Chat.css";

function Chat() {
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
          <p className="chat__message">
            <span className="chat__name">User</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>

          <p className="chat__message chat__receiver">
            <span className="chat__name">User</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>

          <p className="chat__message">
            <span className="chat__name">User</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
        </div>

        <div className="chat__footer">
          <InsertEmoticon />
          <form>
            <input type="text" placeholder="Type a message" />
            <button type="submit">Send</button>
          </form>
          <Mic />
        </div>
      </div>
    </>
  );
}

export default Chat;
