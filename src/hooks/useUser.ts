import { useEffect, useState } from "react";
import auth from "../services/auth";
import { RegisterUser, decodedType } from "../@types/types";
import { jwtDecode } from "jwt-decode";

export const useUser = () => {
  const [user, setUser] = useState<RegisterUser>();
  

  useEffect(() => {
    const userPrevileges:decodedType=jwtDecode(localStorage.getItem("token")??"")
  
    auth
      .userDetails(userPrevileges._id ?? "no user id")
      .then((res) => {
          setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return { user };
} 