import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../utils/backEndUtils";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  console.log(user);

  const getUserFromDb = async () => {
    try {
      const token = localStorage.getItem("skillable_user_token");
      if (token != null) {
        const res = await axios.patch(
          `${baseUrl}/tokenManipulation/tokenDecryptor`,
          { token }
        );
        const userData = res.data;
        console.log(userData);
        
        
      } else {
        console.log("no user history");
      }
    } catch (error) {
      console.log("no user history");
    }
  };

  useEffect(async () => {
    getUserFromDb();
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("skillable_user_token");
    setUser();
  };

  const forgotPasswordHandler = async (email) => {
    try {
      const res = await axios.post(`${baseUrl}/users/forgotPassword`, {
        email,
      });
      console.log(res);
      return true;
    } catch (error) {
      console.log(`error`);
      return false;
    }
  };
  const shared = {
    user,
    setUser,
    logOutHandler,
    getUserFromDb,
    forgotPasswordHandler,
  };
  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}
