import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getToken } from "./token/AuthFunctions";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import HeroInfo from "./components/Hero/HeroInfo";

/*
  TODO: Redireccion a login cuando no esté autenticado
  TODO: Selector a la store, para saber si está autenticado
  TODO: TOKEN en LocalStorage

*/

const App = () => {
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.loginReducer.userLogged);
  useEffect(() => {
    if (getToken() === true) {
      dispatch({ type: "LOGIN_USER" });
    }
  }, [userLogged]);
  useEffect(() => {
    console.log(userLogged);
    if (getToken() === true) {
      dispatch({ type: "LOGIN_USER" });
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          {userLogged ? (
            <>
              <Route component={Home} exact path="/" />
              <Route component={Login} path="/login" />
              <Route component={HeroInfo} path="/heroinfo" />
            </>
          ) : (
            <Login></Login>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
