import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./LogoWrapper.scss";

function LogoWrapper(props) {
  return (
    <Link to={"/"} className="logo-wrapper">
      <img src={Logo} alt="Site Logo" className="site-logo" />
      <span>{props.text}</span>
    </Link>
  );
}
export default LogoWrapper;
