import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Main, Login, Register, Desc } from './pages';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/Register" component={Register}/>
          <Route path="/Description" component={Desc}/>
          <Route path="/Login" component={Login}/>
          <Route path="/" component={Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
