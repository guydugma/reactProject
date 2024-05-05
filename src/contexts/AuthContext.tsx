import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { decodedType } from "../@types/types";

export const AuthContext = createContext({
  isLoggedIn: false,
  userPrevileges: { _id: "", isAdmin: false, isBusiness: false },
  login: (jwt: string) => { },
  logout: () => { },
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPrevileges, setUserPrevileges] = useState({ _id: "", isAdmin: false, isBusiness: false });

  // run code once - when the component is mounted:
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (jwt: string) => {
    setIsLoggedIn(true);

    localStorage.setItem("token", jwt);
    let decoded: decodedType = jwtDecode(jwt);
    setUserPrevileges(decoded);
    localStorage.setItem("user_id", decoded._id);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };


  return (
    <AuthContext.Provider value={{ isLoggedIn, userPrevileges, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
