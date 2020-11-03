import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Context";
import UserMenu from "./UserMenu";
import Logo from "./../assets/images/logo.svg";

function Navbar() {
  const userContext = useContext(UserContext);
  const showUserMenu = () => {
    return userContext.isLoggedIn ? (
      <UserMenu />
    ) : (
      <Link to={"/login"}>Zaloguj się</Link>
    );
  };

  return (
    <nav className="container">
      <Link to={"/"} className="logo-container">
        <img src={Logo} alt="Site Logo" className="site-logo" />
        <span>{process.env.REACT_APP_WEBSITE_NAME}</span>
      </Link>
      {showUserMenu()}
    </nav>
  );
}
export default Navbar;
