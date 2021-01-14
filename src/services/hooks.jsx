import { useContext } from "react";
import { UserContext } from "./Context";

export const useUserData = () => {
  const { userData } = useContext(UserContext);

  return userData;
};
