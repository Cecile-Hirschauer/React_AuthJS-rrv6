import { createContext, useState, useEffetc } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChange,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {

  // firebase
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);

  // modal
  const [modalState, setModalState] = useState({
    signUpModal: true,
    signInModal: false,
  });

  const toggleModals = (modal) => {
    if (modal === "signin") {
      setModalState({
        signUpModal: false,
        signInModal: true,
      });
    }
    if (modal === "signup") {
      setModalState({
        signUpModal: true,
        signInModal: false,
      });
    }
    if (modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false,
      });
    }
  };

  return (
    <UserContext.Provider value={{ modalState, toggleModals, signUp }}>
      {props.children}
    </UserContext.Provider>
  );
}
