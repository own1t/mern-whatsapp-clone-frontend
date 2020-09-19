// React
import React from "react";

// Material-ui
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";

import { Avatar, IconButton } from "@material-ui/core";

// Components
import SidebarChat from "./SidebarChat";

// CSS
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar src="https://scontent.flas1-1.fna.fbcdn.net/v/t1.0-9/55478023_1526013434202201_902892929817772032_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=vKAJLoihJtIAX_YncXP&_nc_ht=scontent.flas1-1.fna&oh=93312014c5a47017a10b440c3695dbd3&oe=5F8B5371" />

          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>

        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlined />
            <input type="text" placeholder="Search or start new chat" />
          </div>
        </div>

        <div className="sidebar__chats">
          <SidebarChat />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
