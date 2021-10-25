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
