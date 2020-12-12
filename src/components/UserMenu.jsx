import { useContext } from "react";
import { UserContext } from "../services/Context";
import { Link } from "react-router-dom";
import Logout from "./../components/Logout";

function UserMenu() {
  const userContext = useContext(UserContext);
  const userData = userContext.userData;

  return (
    <div className="user-menu">
      <div className="user-image-wrapper">
        <img src={userData.imageUrl} alt="User Profile" />
      </div>

      <span>{userData.name}</span>
      <i className="arrow-icon"></i>
      <div className="user-menu-dropdown">
        <Link to={"/my-books"}>Moje książki</Link>
        <Link to={"/messages"}>Wiadomości</Link>
        <Link to={"/"}> Wypożyczone przeze mnie</Link>
        <Link to={"/"}>Ustawienia konta</Link>
        <Logout />
      </div>
    </div>
  );
}
export default UserMenu;
