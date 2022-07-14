import axios from "axios";
import React, { useEffect, useState } from "react";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [isUserAuthenticated, setisUserAuthenticated] = useState();

  const setUserAuthInfo = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: "/api/checkUser",
      });

      setisUserAuthenticated(data);
    } catch (error) {}
  };

  useEffect(() => {
    setUserAuthInfo();
  }, [isUserAuthenticated]);

  return <Provider value={isUserAuthenticated}>{children}</Provider>;
};

export { AuthContext, AuthProvider };
