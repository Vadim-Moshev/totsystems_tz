import React from "react";
import MessageItem from "./messageItem";

const MessagesList = ({ messagesData }) => {
  const messagesElements = messagesData.map(
    ({ id, userName, userId, text }) => {
      return (
        <MessageItem
          key={id}
          id={id}
          userName={userName}
          userId={userId}
          text={text}
        />
      );
    }
  );

  return <div className="messages-list">{messagesElements}</div>;
};

export default MessagesList;
