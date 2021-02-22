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
