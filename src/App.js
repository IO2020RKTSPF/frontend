import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchPage from "./containers/SearchPage";
import LoginPage from "./containers/LoginPage";
import ErrorPage from "./containers/ErrorPage";
import "./stylesheets/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
