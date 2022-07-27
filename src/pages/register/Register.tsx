import React, { useState } from "react";

//utilities imports
import { Link } from "react-router-dom";

//style imports
import { RegisterForm } from "./Register.styled";

export const Register: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }
  function onNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
  }

  function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }

  function confirmPassword(event: React.ChangeEvent<HTMLInputElement>): void {
    setConfirmedPassword(event.target.value);
    if (confirmedPassword !== password) {
      alert("diferent password");
    }
  }

  return (
    <RegisterForm>
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
                  <label htmlFor="email-address">Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    onChange={onNameChange}
                    value={name}
                  />
                </div>
                <div>
                  <label htmlFor="email-address">Email</label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={onEmailChange}
                    value={email}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={onPasswordChange}
                    value={password}
                  />
                </div>
                <div>
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    type="password"
                    name="password-confirm"
                    id="password-confirm"
                  />
                </div>
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <button>Register </button>
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
          </form>
        </main>
      </div>
    </RegisterForm>
  );
};
