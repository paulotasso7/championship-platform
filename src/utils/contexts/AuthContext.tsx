import React, { useContext, createContext } from "react";
import { UserInterface } from "../interfaces/interfaces";

export const user: UserInterface = {
  name: "",
  userName: "",
  userId: "",
  email: "",
  birthDate: "",
  country: "",
  password: "",
};

const AuthContext = createContext(user);
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }): JSX.Element {
  return (
    <AuthContext.Provider value={AuthContext}>{children}</AuthContext.Provider>
  );
}
