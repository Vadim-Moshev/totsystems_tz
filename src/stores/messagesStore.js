import { makeObservable, action, observable } from "mobx";

class MessagesStore {
  messages = [
    {
      id: "w23xz",
      author: "Иван",
      text: "Где сисадмин? У нас в кабинете принтер не печатает",
      working: true,
    },
    {
      id: "cu84n",
      author: "Парамонов Р. П. (зам. директора)",
      text:
        "Коллеги, я напоминаю, сегодня в 14:00 важное совещание у меня в кабинете",
      working: true,
    },
    {
      id: "hfj4e8fu",
      author: "Иван Дмитриев",
      text: "Я в бар после работы, кто со мной?",
      working: false,
    },
    {
      id: "nmu8mn",
      author: "Олег Ж.",
      text: "Вот вы сейчас все работаете, а я в отпуске на Гоа",
      working: false,
    },
  ];

  messageToSend = "";

  constructor() {
    makeObservable(this, {
      messages: observable,
      messageToSend: observable,

      setMessageToSend: action,
      addMessageToBoard: action,
    });
  }

  setMessageToSend = (text = "") => {
    this.messageToSend = text;
  };

  addMessageToBoard = (working) => {
    const newMessage = {
      id: new Date().getTime().toString(),
      text: this.messageToSend,
      author: "Пользователь (ЭТО ВЫ)",
      working,
    };

    this.messages.push(newMessage);
    this.setMessageToSend();
  };
}

export default new MessagesStore();
