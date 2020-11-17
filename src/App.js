import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserContext } from "./services/Context";
import PrivateRoute from "./services/PrivateRoute";
import Navbar from "./components/Navbar";
import SearchPage from "./containers/SearchPage/SearchPage";
import LoginPage from "./containers/LoginPage";
import ErrorPage from "./containers/ErrorPage";
import MyBooksPage from "./containers/MyBooksPage";
import AddBookPage from "./containers/AddBookPage/AddBookPage";
import Footer from "./components/Footer";
import "./stylesheets/main.scss";

function App() {
  const [userData, setUserData] = useState({
    isLogged: false,
    imageUrl: undefined,
    name: undefined,
    userId: undefined,
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
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/my-books" component={MyBooksPage} />
          <PrivateRoute path="/add-book" component={AddBookPage} />
          <Route path="/add-book" component={AddBookPage} />
          <Route exact path="/" component={SearchPage} />
          <Route component={ErrorPage} />
        </Switch>
      </UserContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
