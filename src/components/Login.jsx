import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./Context";
import { useGoogleLogin } from "react-google-login";
import GoogleLogo from "../assets/images/google-logo.svg";
import axios from "axios";

function Login() {
  const userContext = useContext(UserContext);
  const history = useHistory();


  const onSuccess = (res) => {
    console.log("Login Success", res.profileObj);
    
    history.push("/");

    const fetchLogin = async () => {
  
      const result = await axios.get("http://localhost:8080/api/users/login/"+res.profileObj.googleId)
      .catch(function(err){
        if(err.response.status === 404){
          //wykonac tutaj post z userem
          
          const addUser = async () =>{
            const resultAdd = await axios.post("http://localhost:8080/api/users",
            {
              "loginId": res.profileObj.googleId,
              "name": res.profileObj.name
            },
            {
              "Content-Type": "application/json",
              "Access-Control-Allow-Headers" : "*",
              "Access-Control-Allow-Origin" : "*"
            })
            .catch(function (err) {
              console.log(err)
            })
            .then(function (resp) {
              userContext.setUserData({
                token: true,
                imageUrl: res.profileObj.imageUrl,
                name: res.profileObj.name,
                userId : resp.data.id
              });
            })
          }

          addUser();

        }else{
          console.log(err);
        }
      })
      .then(function (resp) {
        userContext.setUserData({
          token: true,
          imageUrl: res.profileObj.imageUrl,
          name: res.profileObj.name,
          userId : resp.data.id
        });
      })
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
