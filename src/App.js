import "./App.css";
import React from "react";
import Cards from "./Cards";
import Counter from "./Counter";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/cards">Cards</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/cards">
              <Cards />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
