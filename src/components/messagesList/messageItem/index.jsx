import React from "react";
import { inject, observer } from "mobx-react";

import MessageControlPanel from "./messageControlPanel";

import "./index.scss";

const MessageItem = inject("MessagesStore")(
  observer(({ id, userName, userId, text, MessagesStore }) => {
    const {
      loggedUserId,
      deleteMessageById,
      messageToSend,
      setMessageToSendById,
      toggleEditingMode,
    } = MessagesStore;

    const messageControlPanel =
      userId === loggedUserId ? (
        <MessageControlPanel
          onMessageDelete={() => {
            deleteMessageById(id);
          }}
          onMessageUpdateQuery={() => {
            toggleEditingMode(true, id);
            setMessageToSendById(id);
          }}
        />
      ) : null;

    return (
      <div className="message_wrapper">
        <div className="message_author">{userName}</div>
        <p className="message_text">{text}</p>
        {messageControlPanel}
      </div>
    );
  })
);

export default MessageItem;
