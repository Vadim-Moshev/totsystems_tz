import { makeObservable, action, observable } from "mobx";

import MessagesStorage from "../helpers/messagesStorage";

class MessagesStore {
  loggedUserId = 0;

  messages = [];

  messageToSend = "";
  editingModeIsTurnedOn = false;
  messageIsBeingEditedIndex = -1;

  constructor() {
    makeObservable(this, {
      messages: observable,
      messageToSend: observable,
      editingModeIsTurnedOn: observable,
      messageIsBeingEditedIndex: observable,

      setMessageToSend: action,
      saveMessage: action,
      deleteMessageById: action,
      setMessageToSendById: action,
      toggleEditingMode: action,
      getMessagesByWorkingFlag: action,
    });
  }

  toggleEditingMode = (flag, messageIsBeingEditedIndex = -1) => {
    this.editingModeIsTurnedOn = flag;
    this.messageIsBeingEditedIndex = messageIsBeingEditedIndex;
  };

  setMessageToSend = (text = "") => {
    this.messageToSend = text;
  };

  saveMessage = (working, messageId = -1) => {
    if (messageId !== -1) {
      MessagesStorage.changeMessageTextById(messageId, this.messageToSend);
      this.toggleEditingMode(false);
    } else {
      const newMessageId = new Date().getTime();
      const newMessage = {
        id: newMessageId,
        userId: this.loggedUserId,
        text: this.messageToSend,
        userName: "Пользователь (ЭТО ВЫ)",
        working,
      };

      MessagesStorage.addMessage(newMessageId, newMessage);
    }

    this.getMessagesByWorkingFlag(working);
    this.setMessageToSend();
  };

  getMessagesByWorkingFlag = (working) => {
    this.messages = MessagesStorage.getMessagesByWorkingFlag(working);
  };

  deleteMessageById = (messageId, working) => {
    MessagesStorage.deleteMessageById(messageId);
    this.getMessagesByWorkingFlag(working);
  };

  setMessageToSendById = (messageId) => {
    const index = this.messages.findIndex(
      (message) => message.id === messageId
    );

    this.messageToSend = this.messages[index].text;
  };
}

export default new MessagesStore();
