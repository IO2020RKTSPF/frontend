import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="container">
      <Link to={"/"} className="logo-wrapper">
        <img src={Logo} alt="Site Logo" className="site-logo" />
        <span>© 2020 Wszelkie prawa zastrzeżone.</span>
      </Link>
      <div className="terms">
        <Link to={"/privacy-policy"}>Polityka prywatności</Link>
        <Link to={"/regulations"}>Regulamin</Link>
      </div>
    </footer>
  );
}
export default Footer;
