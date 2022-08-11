import React, { useState, useCallback, useRef } from "react";

//utilities imports
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

//interfaces imports
import { UserInterface } from "../../utils/interfaces/interfaces";

//style imports
import { Fieldset, RegisterBox, RegisterForm } from "./Register.styled";

//data import
import usersData from "/home/paulotasso/Projetos/championships-platform/src/data/users.json";
import { user } from "../../utils/contexts/AuthContext";

export const Register: React.FC = (): JSX.Element => {
  const confirmRef = useRef("");
  // const [error, setError] = useState<string>("");
  const userRef = useRef<UserInterface>(user);
  const userId: string = uuidv4();
  const navigate: NavigateFunction = useNavigate();

  const addUserToDataBase: () => void = useCallback(() => {
    user.userId = userId;
    usersData.push(user);
    console.log(usersData);
    navigate("/userpage", { replace: true });
  }, [user]);

  // const handlers = {
  //   email: function onEmailChange(user: any) {
  //     setUser(user.email);
  //   },
  //   psw: function onPasswordChange(user: any) {
  //     setUser(user.password);
  //   },
  //   confirm: function onConfirmChange(user: any) {
  //     setConfirm(user);
  //   },
  //   username: function onUserNameChange(user: any) {
  //     setUser(user.userName);
  //   },
  //   name: function onNameChange(user: any) {
  //     setUser(user.name);
  //   },
  //   birth: function onBirthChange(event: any) {
  //     setUser(event.birthDate);
  //   },
  //   country: function onCountryChange(user: any) {
  //     setUser(user.country);
  //   },
  // };

  return (
    <RegisterForm>
      <div>
        <main>
          <>
            <Fieldset id="sign_up">
              <>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    // onChange={(e) => handlers.name(e.target.value)}
                    ref={userRef.current.name}
                  />
                </div>
                <div>
                  <label htmlFor="user-name">User Name</label>
                  <input
                    type="user-name"
                    name="user-name"
                    id="user-name"
                    // onChange={(e) => handlers.username(e.target.value)}
                    ref={userRef.current.userName}
                  />
                </div>
                <div>
                  <label htmlFor="country">Country</label>
                  <input
                    type="country"
                    name="country"
                    id="country"
                    // onChange={(e) => handlers.country(e.target.value)}
                    ref={userRef.current.country}
                  />
                </div>
                <div>
                  <label htmlFor="birth">Birth date</label>
                  <input
                    type="birth"
                    name="birth"
                    id="birth"
                    // onChange={(e) => handlers.birth(e.target.value)}
                    ref={userRef.current.birthDate}
                  />
                </div>
                <div>
                  <label htmlFor="email-address">Email</label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    // onChange={(e) => handlers.email(e.target.value)}
                    ref={userRef.current.email}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    // onChange={handlers.psw}
                    ref={userRef.current.password}
                  />
                </div>
                <div>
                  <label htmlFor="confirm">Confirm Password</label>
                  <input
                    type="password"
                    name="password-confirm"
                    id="password-confirm"
                    ref={confirmRef.current}
                    // onChange={handlers.confirm}
                  />
                </div>
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <button onClick={addUserToDataBase}>Register</button>
              </>
            </Fieldset>
            <RegisterBox>
              <Link to="/login">Login</Link>
              <br></br>
              <a href="#0">Forgot your password?</a>
            </RegisterBox>
          </>
        </main>
      </div>
    </RegisterForm>
  );
};
