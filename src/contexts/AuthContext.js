import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase-config";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [email, SetEmail] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      SetEmail(currentUser.email);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, email }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
