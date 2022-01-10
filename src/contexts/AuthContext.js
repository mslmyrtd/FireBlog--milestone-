// import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import { auth } from "../auth/firebase-config";
export const AuthContext = createContext();
const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     setCurrentUser(currentUser);
  //     console.log(currentUser.email);
  //   });
  // }, []);
  return (
    <AuthContext.Provider value={currentUser}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
