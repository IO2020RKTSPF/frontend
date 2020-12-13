import { Link } from "react-router-dom";
import LogoWrapper from "../LogoWrapper/LogoWrapper";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="container">
      <LogoWrapper text="© 2020 Wszelkie prawa zastrzeżone." />
      <div className="terms">
        <Link to={"/privacy-policy"}>Polityka prywatności</Link>
        <Link to={"/regulations"}>Regulamin</Link>
      </div>
    </footer>
  );
}
export default Footer;
