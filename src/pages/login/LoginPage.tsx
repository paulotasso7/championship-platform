import { useEffect, useState } from "react";
import React from "react";
import { LoginForm } from "./LoginPage.styles";

interface Props {
  email: string;
  password: string;
}

const users = require("../src/data/users.json");

export const LoginPage: React.FC<Props> = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function onEmailInputChange(event: React.FormEvent<HTMLInputElement>) {
    setInputEmail(event.currentTarget.value);
  }

  function onPasswordInputChange(event: React.FormEvent<HTMLInputElement>) {
    setInputPassword(event.currentTarget.value);
  }

  const onSignInSubmit = () => {
    if (!inputEmail.length || !inputPassword.length) {
      alert("preencha os dados corretamente");
    }
    users.find();
  };

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
                />
              </div>
              <div>
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={onPasswordInputChange}
                />
              </div>
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <input type="submit" value="Sign in" />
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
