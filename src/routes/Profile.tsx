import { useContext, useEffect, useState } from "react";
import auth from "../services/auth";
import { RegisterUser } from "../@types/types";
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
  const authContext = useContext(AuthContext);
  const userId = authContext.userPrevileges._id ?? "no user id";
  const [user, setUser] = useState<RegisterUser>();

  useEffect(() => {
    auth
      .userDetails(userId)
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [authContext.isLoggedIn]);

  return (
    <div>
      <h2>
        {user?.name.first} {user?.name.middle} {user?.name.last}{user?.isBusiness ? " (Business)" : "not business"}
      </h2>
      <h2>HELLO</h2>
    </div>
  );
};

export default Profile;
