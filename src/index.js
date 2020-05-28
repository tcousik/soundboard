import React from "react";
import ReactDOM from "react-dom";
import Abby from "./components/abby.js";
import Emma from "./components/emma.js";
import Tejas from "./components/tejas.js";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./index.css";

export default function SoundBoard() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <div>{Home()}</div>} />
          <Route exact path="/abby" component={Abby} />
          <Route exact path="/emma" component={Emma} />
          <Route exact path="/tejas" component={Tejas} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1 className="App">SOUNDBOARD MAIN PAGE</h1>
      <div className="buttonArea">
        <Link className="button" to="/abby">
          Abby
        </Link>
        <Link className="button" to="/emma">
          Emma
        </Link>
        <Link className="button" to="/tejas">
          Tejas
        </Link>
      </div>
    </div>
  );
};

ReactDOM.render(<SoundBoard />, document.getElementById("root"));
