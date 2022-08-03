import React, { useState, useCallback } from "react";
//utilities imports
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

//style imports
import { RegisterForm } from "./Register.styled";

//data import
import usersData from "/home/paulotasso/Projetos/championships-platform/src/data/users.json";

//methods imports
// import handlers from "/home/paulotasso/Projetos/championships-platform/src/utils/registerUtils/index";

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

export const Register: React.FC = (): JSX.Element => {
  const [confirm, setConfirm] = useState("");
  const [error, serError] = useState("");
  const user: UserInterface = {
    name: "",
    userName: "",
    userId: "",
    email: "",
    birthDate: "",
    country: "",
    password: "",
  };
  const [userObj, setUserObj] = useState(user);
  const userId: string = uuidv4();
  const navigate = useNavigate();

  const addUserToDataBase = useCallback(() => {
    userObj.userId = userId;
    usersData.push(userObj);
    console.log(usersData);
    navigate("/userpage", { replace: true });
  }, [userObj]);

  const handlers = {
    email: function onEmailChange(event: any) {
      user.email = event.target.value;
      setUserObj(user);
    },
    psw: function onPasswordChange(event: any) {
      user.password = event.target.value;
      setUserObj(user);
    },
    confirm: function onPasswordChange(event: any) {
      setConfirm(event.target.value);
    },
    username: function onUserNameChange(event: any) {
      user.userName = event.target.value;
      setUserObj(user);
    },

    name: function onNameChange(event: any) {
      user.name = event.target.value;
      setUserObj(user);
    },
    birth: function onBirthChange(event: any) {
      user.birthDate = event.target.value;
      setUserObj(user);
    },

    country: function onCountryChange(event: any) {
      user.country = event.target.value;
      setUserObj(user);
    },
  };

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
                    onChange={handlers.name}
                    value={userObj.name}
                  />
                </div>
                <div>
                  <label htmlFor="name">User Name</label>
                  <input
                    type="user-name"
                    name="user-name"
                    id="user-name"
                    onChange={handlers.username}
                    value={userObj.userName}
                  />
                </div>
                <div>
                  <label htmlFor="name">Country</label>
                  <input
                    type="country"
                    name="country"
                    id="country"
                    onChange={handlers.country}
                    value={userObj.country}
                  />
                </div>
                <div>
                  <label htmlFor="name">Birth date</label>
                  <input
                    type="birth"
                    name="birth"
                    id="birth"
                    onChange={handlers.birth}
                    value={userObj.birthDate}
                  />
                </div>
                <div>
                  <label htmlFor="email-address">Email</label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={handlers.email}
                    value={userObj.email}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    onChange={handlers.psw}
                    value={userObj.password}
                  />
                </div>
                <div>
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    type="password"
                    name="password-confirm"
                    id="password-confirm"
                    value={confirm}
                    onChange={handlers.confirm}
                  />
                </div>
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <button onClick={addUserToDataBase}>Register</button>
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
