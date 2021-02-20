import React from "react";

import "./index.scss";

const MessageControlPanel = ({ onMessageDelete }) => {
  return (
    <div className="message-control-panel_wrapper">
      <button className="message-control-panel_button">Редактировать</button>
      <button
        className="message-control-panel_button"
        onClick={onMessageDelete}
      >
        Удалить
      </button>
    </div>
  );
};

export default MessageControlPanel;
