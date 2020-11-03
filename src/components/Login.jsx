import { useContext } from "react";
import { UserContext } from "./Context";
import { useGoogleLogin } from "react-google-login";

function Login() {
  const userContext = useContext(UserContext);

  const onSuccess = (res) => {
    console.log("Login Success");
    userContext.login();
    userContext.providerResponse = res.profileObj;
  };
  const onFailure = (res) => {
    console.log("Login failed", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <button onClick={signIn}>
      <span>Sign in with Google</span>
    </button>
  );
}
export default Login;
