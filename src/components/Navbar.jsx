import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Context";
import Userbar from "./Userbar";
import Logo from "./../assets/images/logo.svg";

function Navbar() {
  const userContext = useContext(UserContext);

  const showUserMenu = () => {
    return userContext.userData.token ? (
      <Userbar />
    ) : (
      <Link to={"/login"}>Zaloguj się</Link>
    );
  };

  return (
    <nav className="container">
      <Link to={"/"} className="logo-wrapper">
        <img src={Logo} alt="Site Logo" className="site-logo" />
        <span>{process.env.REACT_APP_WEBSITE_NAME}</span>
      </Link>
      {showUserMenu()}
    </nav>
  );
}
export default Navbar;
