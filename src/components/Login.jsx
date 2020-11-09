import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./Context";
import { useGoogleLogin } from "react-google-login";
import GoogleLogo from "../assets/images/google-logo.svg";
import axios from "axios";

function Login() {
  const userContext = useContext(UserContext);
  const history = useHistory();

  const onSuccess = (providerResponse) => {
    const providerRes = providerResponse.profileObj;

    const fetchLogin = async () => {
      await axios
        .get("http://localhost:8080/api/users/login/" + providerRes.googleId)
        .then((res) => {
          console.log("Login Success", res);
          userContext.setUserData({
            token: true,
            imageUrl: providerRes.imageUrl,
            name: providerRes.name,
            userId: res.data.id,
          });
          history.push("/");
        })
        .catch((err) => {
          if (err.response === undefined || err.response.status !== 404) {
            console.log(err);
            return;
          }
          const addUser = async () => {
            await axios
              .post(
                "http://localhost:8080/api/users",
                {
                  loginId: providerRes.googleId,
                  name: providerRes.name,
                },
                {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Headers": "*",
                  "Access-Control-Allow-Origin": "*",
                }
              )
              .then((res) => {
                console.log("Login Success", res);
                userContext.setUserData({
                  token: true,
                  imageUrl: providerRes.imageUrl,
                  name: providerRes.name,
                  userId: res.data.id,
                });
                history.push("/");
              })
              .catch((err) => {
                console.log(err);
              });
          };

          addUser();
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
