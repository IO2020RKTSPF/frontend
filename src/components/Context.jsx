import { createContext } from "react";

export const UserContext = createContext({
  userData: {
    token: undefined,
    imageUrl: undefined,
    name: undefined,
  },
  setUserData: () => {},
});
