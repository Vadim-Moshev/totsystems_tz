import React from "react";
import MessageItem from "./messageItem";

const MessagesList = ({ messagesData }) => {
  const messagesElements = messagesData.map(({ id, author, text }) => {
    return <MessageItem key={id} author={author} text={text} />;
  });

  return <div className="messages-list">{messagesElements}</div>;
};

export default MessagesList;
