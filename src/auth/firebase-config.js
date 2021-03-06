import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { successNote } from "../helpers/toastNotify";

const firebaseConfig = {
  apiKey: "AIzaSyCEI-SzwmNp5kcOcQlzwbtjaIjIiKM_NO8",
  authDomain: "fireblog-f3591.firebaseapp.com",
  projectId: "fireblog-f3591",
  storageBucket: "fireblog-f3591.appspot.com",
  messagingSenderId: "809628847298",
  appId: "1:809628847298:web:326e5c22211d4770b47f5b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      successNote("Successfully Login");
    })
    .catch((error) => {
      const errorCode = error.code;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
