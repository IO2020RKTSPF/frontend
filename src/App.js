import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserContext } from "./components/Context";
import Navbar from "./components/Navbar";
import SearchPage from "./containers/SearchPage";
import LoginPage from "./containers/LoginPage";
import ErrorPage from "./containers/ErrorPage";
import Footer from "./components/Footer";
import "./stylesheets/main.scss";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    imageUrl: undefined,
    name: undefined,
  });

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          userData: userData,
          setUserData: setUserData,
        }}
      >
        <Navbar />
        <Switch>
          <Route path="/login" component={() => <LoginPage />} />
          <Route exact path="/" component={SearchPage} />
          <Route component={ErrorPage} />
        </Switch>
      </UserContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
