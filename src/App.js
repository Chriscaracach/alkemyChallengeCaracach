import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getToken } from "./token/AuthFunctions";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import HeroInfo from "./components/Hero/HeroInfo";
import { loginUser } from "./redux/actions/loginActions";

const App = () => {
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.loginReducer.userLogged);
  //Efectos para chequear que el login del user y el token
  useEffect(() => {
    if (getToken() === true) {
      dispatch(loginUser());
    }
  }, [userLogged, dispatch]);
  useEffect(() => {
    if (getToken() === true) {
      dispatch(loginUser());
    }
  }, [dispatch]);

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
            <>
              <Login></Login>
            </>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
