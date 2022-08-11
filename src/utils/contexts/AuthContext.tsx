import React, { useContext, useEffect, useState } from "react";

//interfaces imports
import { PropsI, UserInterface } from "../interfaces/interfaces";

//firebase imports
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  UserCredential,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export const user: UserInterface = {
  name: "",
  userName: "",
  userId: "",
  email: "",
  birthDate: "",
  country: "",
  password: "",
};

const AuthContext = React.createContext<UserInterface | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<PropsI> = ({ children }): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<UserInterface | null>(null);

  function signup(
    auth: Auth,
    email: string,
    password: string
  ): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
