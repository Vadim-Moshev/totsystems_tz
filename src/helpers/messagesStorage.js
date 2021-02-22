import { messagesByOtherUsers } from "./messagesByOtherUsers";

const isCorporativeMessage = (stringifiedValue, working) => {
  let message;
  try {
    message = JSON.parse(stringifiedValue);
  } catch {
    return false;
  } finally {
    return !!message && message.working === working;
  }
};

const byUnixDate = (a, b) => a.id - b.id;

class MessagesStorage {
  constructor() {
    // Это просто инициализация локалСторадж для имитации корпоративного общения
    const keys = Object.keys(localStorage).map(Number);
    const flag = keys.some((key) => {
      return [1, 2, 3, 4, 5, 6, 7].includes(key);
    });

    if (flag) {
      return;
    }

    messagesByOtherUsers.forEach((msg, index) => {
      this.addMessage(index + 1, msg);
    });
  }

  addMessage = (id, message) => {
    localStorage.setItem(id, JSON.stringify(message));
  };

  getMessagesByWorkingFlag = (working) => {
    const localStorageValues = Object.values(localStorage);
    const foundMessages = localStorageValues
      .filter((message) => isCorporativeMessage(message, working))
      .map(JSON.parse)
      .sort(byUnixDate);

    return foundMessages;
  };

  deleteMessageById = (id) => {
    localStorage.removeItem(id);
  };

  changeMessageTextById = (id, newText) => {
    const messageToChange = JSON.parse(localStorage.getItem(id));

    messageToChange.text = newText;
    localStorage.setItem(id, JSON.stringify(messageToChange));
  };
}

export default new MessagesStorage();
