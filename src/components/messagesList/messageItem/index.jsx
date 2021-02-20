import React from "react";

import "./index.scss";

const MessageItem = ({ author, text }) => {
  return (
    <div className="message_wrapper">
      <div className="message_author">{author}</div>
      <p className="message_text">{text}</p>
    </div>
  );
};

export default MessageItem;
