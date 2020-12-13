import { useContext } from "react";
import { UserContext } from "../services/Context";
import { Link } from "react-router-dom";
import Userbar from "./Userbar";
import LogoWrapper from "./LogoWrapper/LogoWrapper";

function Navbar() {
  const userContext = useContext(UserContext);

  const showUserMenu = () => {
    return userContext.userData.isLogged ? (
      <Userbar />
    ) : (
      <Link to={"/login"}>Zaloguj się</Link>
    );
  };

  return (
    <nav className="container">
      <LogoWrapper text={process.env.REACT_APP_WEBSITE_NAME} />
      {showUserMenu()}
    </nav>
  );
}
export default Navbar;
