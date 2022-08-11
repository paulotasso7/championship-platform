import { Home } from "../../pages/home/Home";
import { LoginPage } from "../../pages/login/LoginPage";
import { Register } from "../../pages/register/Register";
import { UserPage } from "../../pages/userpage/UserPage";

export default interface IRoute {
  path: string;
  exact: boolean;
  component: any | null;
  name: string;
  protected: boolean;
}

export const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    component: Home,
    name: "Home Page",
    protected: false,
  },
  {
    path: "/login",
    exact: true,
    component: LoginPage,
    name: "Login",
    protected: false,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
    name: "Register",
    protected: false,
  },
  {
    path: "/userpage",
    exact: true,
    component: UserPage,
    name: "User Page",
    protected: true,
  },
];
