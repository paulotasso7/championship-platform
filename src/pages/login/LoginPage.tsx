import { useState } from "react";
import React from "react";
import { LoginForm } from "./LoginPage.styles";

const users = require("/home/paulotasso/Projetos/championships-platform/src/data/users.json");

export const LoginPage: React.FC = (): JSX.Element => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function onEmailInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputEmail(event.target.value);
  }

  function onPasswordInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputPassword(event.target.value);
  }

  function onSubmitSignIn(event: any): void {
    event.preventDefault();
    const user: object = users.find(
      (x: { email: string; password: string }) =>
        x.email === inputEmail && x.password === inputPassword
    );
    if (!user) {
      alert("email ou senha incorretos");
    }
    console.log(user);
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
              <button style={{ padding: "5px" }} onClick={onSubmitSignIn}>
                Sign In
              </button>
            </fieldset>
            <div></div>
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
