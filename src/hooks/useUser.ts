import { useEffect, useState } from "react";
import auth from "../services/auth";
import { RegisterUser } from "../@types/types";

export const useUser = () => {
  const [user, setUser] = useState<RegisterUser>();

  useEffect(() => {
    auth
      .userDetails(localStorage.getItem("user_id") ?? "no user id")
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return { user };
} 