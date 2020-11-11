import { createContext } from "react";

export const UserContext = createContext({
  userData: {
    isLogged: false,
    imageUrl: undefined,
    name: undefined,
    userId: undefined,
  },
  setUserData: () => {},
});
