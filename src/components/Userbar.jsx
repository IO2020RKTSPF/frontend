import { Link } from "react-router-dom";
import Bell from "../assets/images/bell.svg";
import UserMenu from "../components/UserMenu";

function Userbar() {
  return (
    <div className="userbar">
      <Link to={"/"} className="bell">
        <img src={Bell} alt="Bell" />
      </Link>
      <UserMenu />
      <Link to={"/add-book"} className="accent-button">
        Dodaj książkę
      </Link>
    </div>
  );
}
export default Userbar;
