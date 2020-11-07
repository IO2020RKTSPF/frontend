import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./Context";
import { useGoogleLogin } from "react-google-login";
import GoogleLogo from "../assets/images/google-logo.svg";

function Login() {
  const userContext = useContext(UserContext);
  const history = useHistory();

  const onSuccess = (res) => {
    console.log("Login Success", res.profileObj);
    userContext.setUserData({
      token: true,
      imageUrl: res.profileObj.imageUrl,
      name: res.profileObj.name,
    });
    history.push("/");
  };

  const onFailure = (res) => {
    console.log("Login failed", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    isSignedIn: false,
    accessType: "offline",
  });

  return (
    <button onClick={signIn} className="login">
      <img src={GoogleLogo} alt="Google Logo" />
      <span>Zaloguj się przez Google</span>
    </button>
  );
}
export default Login;
