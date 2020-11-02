import { Link } from "react-router-dom";
import Logo from "./../assets/images/logo.svg";

function Navbar() {
  return (
    <nav className="container">
      <Link to={"/"} className="logo-container">
        <img src={Logo} alt="Site Logo" className="site-logo" />
        <span>{process.env.REACT_APP_WEBSITE_NAME}</span>
      </Link>
      <Link to={"/login"}>Zaloguj się</Link>
    </nav>
  );
}
export default Navbar;
