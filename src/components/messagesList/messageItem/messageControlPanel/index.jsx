import React from "react";

import "./index.scss";

const MessageControlPanel = ({ onMessageDelete, onMessageUpdateQuery }) => {
  return (
    <div className="message-control-panel_wrapper">
      <button
        className="message-control-panel_button"
        onClick={onMessageUpdateQuery}
      >
        Редактировать
      </button>
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
