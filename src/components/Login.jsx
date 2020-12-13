import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../services/Context";
import { useGoogleLogin } from "react-google-login";
import Api from "../services/Api";
import GoogleLogo from "../assets/images/google-logo.svg";

function Login() {
  const userContext = useContext(UserContext);
  const history = useHistory();

  const onSuccess = (providerResponse) => {
    const providerRes = providerResponse.profileObj;

    const fetchLogin = async () => {
      await Api.post(`api/users/login`,
      {
        loginId: providerRes.googleId,
        name: providerRes.name,
      },
      {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
      })
        .then((res) => {
          console.log("Login Success", res);
          userContext.setUserData({
            isLogged: true,
            imageUrl: providerRes.imageUrl,
            name: providerRes.name,
            userId: res.data.user.id,
            token: res.data.token,
          });
          Api.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.token;
          history.push("/");
        })
        .catch((err) => {
          if (err.response === undefined) {
            console.log(err);
            return;
          }
        });
    };

    fetchLogin();
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
