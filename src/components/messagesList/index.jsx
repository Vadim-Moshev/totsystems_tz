import React from "react";
import MessageItem from "./messageItem";

const MessagesList = ({ messagesData, working }) => {
  if (messagesData.length === 0) {
    return (
      <span className="no-messages-caption">
        В текущем разделе нет сообщений.
      </span>
    );
  }

  const messagesElements = messagesData.map(
    ({ id, userName, userId, text, working }) => {
      return (
        <MessageItem
          key={id}
          id={id}
          userName={userName}
          userId={userId}
          text={text}
          working={working}
        />
      );
    }
  );

  return <div className="messages-list">{messagesElements}</div>;
};

export default MessagesList;
