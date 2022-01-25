import { createContext, useState, useEffetc } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  });

  const toggleModals = (modal) => {
    if (modal === "signin") {
      setModalState({
        signInModal: false,
        signInModal: true,
      });
    } 
    if (modal === "signup") {
      setModalState({
        signInModal: true,
        signInModal: false,
      });
    }
    if (modal === "close") {
      setModalState({
        signInModal: false,
        signInModal: true,
      });
    }
  };

  return (
    <UserContext.Provider value={(modalState, toggleModals)}>
      {props.children}
    </UserContext.Provider>
  );
}
