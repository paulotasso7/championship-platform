import React, { useContext } from "react";
import { Props, UserInterface } from "../interfaces/interfaces";

export const user: UserInterface = {
  name: "",
  userName: "",
  userId: "",
  email: "",
  birthDate: "",
  country: "",
  password: "",
};

const AuthContext = React.createContext<UserInterface | null>(user);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<Props> = ({ children }): JSX.Element => {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
