import "./App.css";
import { Router, Switch, Route } from "react-router";
import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      {/* <Router>
        <Switch> */}
      <Header></Header>
      <Home></Home>
      {/* </Switch>
      </Router> */}
    </div>
  );
}

export default App;
