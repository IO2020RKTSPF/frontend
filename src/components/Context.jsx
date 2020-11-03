import { createContext } from "react";

export const UserContext = createContext({
  isLoggedIn: false,
  providerResponse: null,
  login: () => {},
  logout: () => {},
});
