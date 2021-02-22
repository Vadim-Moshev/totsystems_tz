import React, { useEffect, useRef } from "react";
import { inject, observer } from "mobx-react";

import MessagesList from "../../components/messagesList";

import "./index.scss";

const Board = inject("MessagesStore")(
  observer(({ MessagesStore, working }) => {
    const textarea = useRef();
    const {
      getMessagesByWorkingFlag,
      messageToSend,
      messages,
      setMessageToSend,
      saveMessage,
      messageIsBeingEditedIndex,
      toggleEditingMode,
      editingModeIsTurnedOn,
    } = MessagesStore;

    useEffect(() => {
      getMessagesByWorkingFlag(working);
      toggleEditingMode(false);
    }, [working]);

    useEffect(() => {
      if (editingModeIsTurnedOn) {
        textarea.current.focus();
      }
    }, [editingModeIsTurnedOn]);

    const messagesData = messages;

    const cancelEditingButton = editingModeIsTurnedOn ? (
      <input
        type="button"
        value="Отменить редактирование"
        className="board-form_button"
        onClick={() => {
          toggleEditingMode(false);
          setMessageToSend();
        }}
      />
    ) : null;

    return (
      <>
        <MessagesList messagesData={messagesData} working={working} />
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
            ref={textarea}
          />
          <input
            type="submit"
            value="Отправить"
            className="board-form_button"
          />
          {cancelEditingButton}
        </form>
      </>
    );
  })
);

export default Board;
