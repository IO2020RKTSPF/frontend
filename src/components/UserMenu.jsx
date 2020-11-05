import { useContext } from "react";
import { UserContext } from "./Context";
import Logout from "./../components/Logout";

function UserMenu() {
  const userContext = useContext(UserContext);
  const userData = userContext.userData;

  return (
    <div>
      <img src={userData.imageUrl} alt="" />
      <span>{userData.name}</span>
      <Logout />
    </div>
  );
}
export default UserMenu;
