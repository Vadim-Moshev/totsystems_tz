import { Provider } from "mobx-react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "mobx-react-router";

import Menu from "./components/menu";

import Board from "./pages/board";

import routing from "./stores/routing";
import stores from "./stores/index";

import "./App.css";

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routing);

function App() {
  return (
    <Provider {...stores}>
      <Router history={history}>
        <div className="wrapper">
          <Menu />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Board working={true} />;
              }}
            />

            <Route
              exact
              path="/workingmessages"
              render={() => {
                return <Board working={true} />;
              }}
            />

            <Route
              exact
              path="/restmessages"
              render={() => {
                return <Board working={false} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

/*



*/
