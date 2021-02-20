import React from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import "./index.scss";

const Menu = () => {
  return (
    <div className="main-menu_wrapper">
      <Link to="/workingmessages" className="main-menu_link">
        Рабочие вопросы
      </Link>
      <Link to="/restmessages" className="main-menu_link">
        Свободное общение
      </Link>
    </div>
  );
};

export default Menu;
