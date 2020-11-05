import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Message from "./Messages";
import db from "./firebase";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setroomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapShot) => {
          setRoomDetails(snapShot.data());
        });
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapShot) =>
        setroomMessages(snapShot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomDetails);
  console.log(roomMessages);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>

      <div className="chat_messages">
        {/* Messages */}
        {roomMessages.map(({ message, timestamp, user, userImage }) => {
          return (
            <Message
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
            />
          );
        })}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
