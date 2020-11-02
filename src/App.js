import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchPage from "./containers/SearchPage";
import ErrorPage from "./containers/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
