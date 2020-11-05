import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [channels, setChannel] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapShot) => {
      setChannel(
        snapShot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Web Development</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="threads" />
      <SidebarOption title="youtube" />
      <SidebarOption Icon={InsertCommentIcon} title="threads" />
      <SidebarOption Icon={InsertCommentIcon} title="threads" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption />

      {/* connect to db and list all the channels using sidebarOption */}
      {/* {console.log(channels)} */}
      {channels.map((channel) => {
        return <SidebarOption title={channel.name} id={channel.id} />;
      })}
    </div>
  );
}

export default Sidebar;
