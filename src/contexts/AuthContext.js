import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase-config";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [email, SetEmail] = useState();
  const [name, SetName] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      SetEmail(currentUser.email);
      SetName(currentUser.displayName);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, email, name }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
