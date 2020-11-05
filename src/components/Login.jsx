import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./Context";
import { useGoogleLogin } from "react-google-login";

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
    <button onClick={signIn}>
      <span>Sign in with Google</span>
    </button>
  );
}
export default Login;
