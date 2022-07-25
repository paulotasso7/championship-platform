// react imports
import { useState } from "react";
import React from "react";

// styles imports
import { LoginForm } from "./LoginPage.styles";

// utilities imports
import { useNavigate } from "react-router-dom";

//data import
const users = require("/home/paulotasso/Projetos/championships-platform/src/data/users.json");

export const LoginPage: React.FC = (): JSX.Element => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const navigate = useNavigate();

  function onEmailInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setInputEmail(event.target.value);
  }

  function onPasswordInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setInputPassword(event.target.value);
  }

  function onSubmitSignIn(event: any): JSX.Element | void {
    event.preventDefault();
    const user: object = users.find(
      (userInfo: { email: string; password: string }) =>
        userInfo.email === inputEmail && userInfo.password === inputPassword
    );

    if (!user) {
      alert("email ou senha incorretos");
    }
    if (user) {
      navigate("/userpage");
    }
  }

  return (
    <LoginForm>
      <div>
        <main>
          <form>
            <fieldset
              id="sign_up"
              style={{
                padding: "100px",
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
                  <label htmlFor="email-address">Email</label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={onEmailInputChange}
                    value={inputEmail}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={inputPassword}
                    onChange={onPasswordInputChange}
                  />
                </div>
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <button onClick={onSubmitSignIn}>Sign In </button>
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
              <a href="#0">Sign Up</a>
              <br></br>
              <a href="#0">Forgot your password?</a>
            </div>
          </form>
        </main>
      </div>
    </LoginForm>
  );
};
