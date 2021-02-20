import React from "react";
import { inject, observer } from "mobx-react";

import MessagesList from "../../components/messagesList";

import "./index.scss";

const Board = inject("MessagesStore")(
  observer(({ MessagesStore, working }) => {
    const {
      messages,
      messageToSend,
      setMessageToSend,
      saveMessage,
      messageIsBeingEditedIndex,
      toggleEditingMode,
      editingModeIsTurnedOn,
    } = MessagesStore;

    const messagesData = messages.filter(
      (message) => message.working === working
    );

    // const

    return (
      <>
        <MessagesList messagesData={messagesData} />
        <form
          noValidate
          className="board-form"
          onSubmit={(event) => {
            event.preventDefault();
            saveMessage(working, messageIsBeingEditedIndex);
          }}
        >
          <textarea
            className="board-form_textarea"
            onInput={(event) => setMessageToSend(event.target.value)}
            value={messageToSend}
          />
          <input
            type="submit"
            value="Отправить"
            className="board-form_submit"
          />
        </form>
      </>
    );
  })
);

export default Board;
