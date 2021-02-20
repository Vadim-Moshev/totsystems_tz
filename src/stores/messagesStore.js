import { makeObservable, action, observable } from "mobx";

class MessagesStore {
  loggedUserId = 0;

  messages = [
    {
      id: 84732748,
      userName: "Иван",
      userId: 123,
      text: "Где сисадмин? У нас в кабинете принтер не печатает",
      working: true,
    },
    {
      id: 384378,
      userName: "Парамонов Р. П. (зам. директора)",
      userId: 1583,
      text:
        "Коллеги, я напоминаю, сегодня в 14:00 важное совещание у меня в кабинете",
      working: true,
    },
    {
      id: 348973,
      userName: "Пользователь (ЭТО ВЫ)",
      userId: 0,
      text:
        "Дима, Саша, Маша и Даша (Отдел информацизации), сегодня после 17:00 зайдите к директору в кабинет по поводу премии.",
      working: true,
    },
    {
      id: 42,
      userName: "Иван Дмитриев",
      userId: 90,
      text: "Я в бар после работы, кто со мной?",
      working: false,
    },
    {
      id: 2894,
      userName: "Олег Ж.",
      userId: 999,
      text: "Вот вы сейчас все работаете, а я в отпуске на Гоа",
      working: false,
    },
    {
      id: 4445110005,
      userName: "Пользователь (ЭТО ВЫ)",
      userId: 0,
      text: "Тебе вообще нормально такое писать? У нас так-то дедлайн тут.",
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
      deleteMessageById: action,
    });
  }

  setMessageToSend = (text = "") => {
    this.messageToSend = text;
  };

  addMessageToBoard = (working) => {
    const newMessage = {
      id: new Date().getTime(),
      userId: this.loggedUserId,
      text: this.messageToSend,
      userName: "Пользователь (ЭТО ВЫ)",
      working,
    };

    this.messages.push(newMessage);
    this.setMessageToSend();
  };

  deleteMessageById = (messageId) => {
    const messageIndexToDelete = this.messages.findIndex(
      (message) => message.id === messageId
    );
    this.messages.splice(messageIndexToDelete, 1);
  };
}

export default new MessagesStore();
