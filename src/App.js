import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserContext } from "./components/Context";
import Navbar from "./components/Navbar";
import SearchPage from "./containers/SearchPage";
import LoginPage from "./containers/LoginPage";
import ErrorPage from "./containers/ErrorPage";
import "./stylesheets/main.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/login" component={() => <LoginPage />} />
          <Route component={ErrorPage} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
