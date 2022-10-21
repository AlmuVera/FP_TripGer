import { createContext, useState, useEffect } from "react";
import { getProfile } from "../services/auth-services";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(undefined); // undefined means loading

  useEffect(() => {
    const isLoaded = localStorage.getItem("user-loaded") === "true";
    if (isLoaded){
      getProfile()
      .then((user) => setUser(user))
      .catch((error) => setUser(null));
  
    } else {
      setUser(null)
    }
   
  }, []);

  const authenticateUser = (user) => {
    localStorage.setItem('user-loaded', 'true')
    setUser(null)
  }

  const value = {
    user,
    setUser: authenticateUser,
  };

  if (user === undefined) {
    return <></>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
