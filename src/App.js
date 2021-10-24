import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import HeroInfo from "./components/Hero/HeroInfo";

/*
  TODO: Redireccion a login cuando no esté autenticado
  TODO: Selector a la store, para saber si está autenticado
  TODO: TOKEN en LocalStorage

*/
function App() {
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
