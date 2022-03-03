import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import HeroInfo from "./components/Hero/HeroInfo";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <>
            <Route component={Home} exact path="/" />
            <Route component={HeroInfo} path="/heroinfo" />
          </>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
