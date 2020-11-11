import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../services/Context";

function PrivateRoute({ component: PrivateComponent, ...rest }) {
  const userContext = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        userContext.userData.isLogged ? (
          <PrivateComponent {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
export default PrivateRoute;
