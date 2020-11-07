import { useGoogleLogout } from "react-google-login";
import { useContext } from "react";
import { UserContext } from "./Context";

function Logout() {
  const userContext = useContext(UserContext);

  const onLogoutSuccess = (res) => {
    console.log("Logged out Success", res);
    userContext.setUserData({
      token: undefined,
      name: undefined,
    });
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    onLogoutSuccess,
    onFailure,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  });

  return (
    <label className="logout">
      <button onClick={signOut}>Wyloguj</button>
    </label>
  );
}
export default Logout;
