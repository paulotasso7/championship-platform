import React, { useRef, useState, useEffect, useMemo } from "react";

//utilities imports
import { Link } from "react-router-dom";

//style imports
import { RegisterForm } from "./Register.styled";

//data import
import usersData from "/home/paulotasso/Projetos/championships-platform/src/data/users.json";

//utilities imports
import { v4 as uuidv4 } from "uuid";

interface UserInterface {
  name: string;
  userName: string;
  userId: string;
  email: string;
  birthDate: string;
  country: string;
  password: string;
  cPassword?: string;
}

const userId = uuidv4();

export const Register: React.FC = (): JSX.Element => {
  const password = useRef<any | null>(null);
  const cPassword = useRef<any | null>(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState("form-control");

  const user: UserInterface = {
    name: "",
    userName: "",
    userId: userId,
    email: "",
    birthDate: "",
    country: "",
    password: "",
  };

  const [userObj, setUserObj] = useState(user);

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password.current.defaulValue === cPassword.current.defaulValue) {
        setShowErrorMessage(false);
        setCPasswordClass("form-control is-valid");
      } else {
        setShowErrorMessage(true);
        setCPasswordClass("form-control is-invalid");
      }
    }
  }, [isCPasswordDirty]);

  const checkPasswords = (e: any): void => {
    setIsCPasswordDirty(true);
    if (isCPasswordDirty) {
      if (password.current.defaulValue === cPassword.current.defaulValue) {
        setCPasswordClass("form-control is-valid");
        setShowErrorMessage(false);
      } else {
        console.log("different");
        setShowErrorMessage(true);
        setCPasswordClass("form-control is-invalid");
      }
    }
  };

  const addUserToDataBase = () => {
    usersData.push(userObj);
  };
  const userMemo = useMemo(addUserToDataBase, [userObj]);

  function onEmailChange(event: any) {
    user.email = event.target.value;
    setUserObj(user);
  }
  function onPasswordChange(event: any) {
    user.password = event.target.value;
    setUserObj(user);
  }
  function onUserNameChange(event: any) {
    user.userName = event.target.value;
    setUserObj(user);
  }

  function onNameChange(event: any) {
    user.name = event.target.value;
    setUserObj(user);
  }

  function onBirthChange(event: any) {
    user.birthDate = event.target.value;
    setUserObj(user);
  }

  function onCountryChange(event: any) {
    user.country = event.target.value;
    setUserObj(user);
  }

  // function onNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
  //   setName(event.target.value);
  // }

  // function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
  //   setPassword(event.target.value);
  // }

  // function confirmPassword(): boolean {
  //   const password: string | null = (
  //     document.getElementById("password") as HTMLInputElement
  //   ).value;
  //   const passwordConfirm: string | null = (
  //     document.getElementById("password-confirm") as HTMLInputElement
  //   ).value;

  //   if (password !== passwordConfirm) {
  //     alert("password different");
  //     return false;
  //   }
  //   return true;
  // }

  return (
    <RegisterForm>
      <div>
        <main>
          <>
            <fieldset
              id="sign_up"
              style={{
                padding: "150px",
                borderRadius: "100%",
                height: "200px",
                width: "200px",
                margin: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    onChange={onNameChange}
                  />
                </div>
                <div>
                  <label htmlFor="name">User Name</label>
                  <input
                    type="user-name"
                    name="user-name"
                    id="user-name"
                    onChange={onUserNameChange}
                  />
                </div>
                <div>
                  <label htmlFor="name">Country</label>
                  <input
                    type="country"
                    name="country"
                    id="country"
                    onChange={onCountryChange}
                  />
                </div>
                <div>
                  <label htmlFor="name">Birth date</label>
                  <input
                    type="birth"
                    name="birth"
                    id="birth"
                    onChange={onBirthChange}
                  />
                </div>
                <div>
                  <label htmlFor="email-address">Email</label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={onEmailChange}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    ref={password}
                    className="form-control"
                    onChange={onPasswordChange}
                  />
                </div>
                <div>
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    type="password"
                    name="password-confirm"
                    id="password-confirm"
                    onChange={checkPasswords}
                    ref={cPassword}
                    className={cPasswordClass}
                  />
                  {showErrorMessage && isCPasswordDirty ? (
                    <>
                      <p>passwords dont match</p>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <button onClick={() => console.log(usersData)}>Register</button>
              </>
            </fieldset>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                fontSize: "14px",
                alignItems: "center",
              }}
            >
              <Link to="/login">Login</Link>
              <br></br>
              <a href="#0">Forgot your password?</a>
            </div>
          </>
        </main>
      </div>
    </RegisterForm>
  );
};
