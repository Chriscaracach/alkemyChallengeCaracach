import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import HeroInfo from "./components/Hero/HeroInfo";

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Login} path="/login" />
          <Route component={HeroInfo} path="/heroinfo" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
