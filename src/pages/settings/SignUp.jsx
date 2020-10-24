import React, { useState } from "react";
import axios from "axios";
import { url } from "../../url";
import "./Login.css";

export const SignUp = () => {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newUser, setNewUser] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmed, setNewPasswordConfirmed] = useState("");

  const { online, register } = url;

  const inputNewFirstName = (e) => {
    setNewFirstName(e.target.value);
  };
  const inputNewLastName = (e) => {
    setNewLastName(e.target.value);
  };
  const inputNewUser = (e) => {
    setNewUser(e.target.value);
  };
  const inputNewEmail = (e) => {
    setNewEmail(e.target.value);
  };
  const inputNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const inputNewConfirmedPassword = (e) => {
    setNewPasswordConfirmed(e.target.value);
  };

  const registerUser = () => {
    let newUserInfo = {
      username: newUser,
      password: newPassword,
      email: newEmail,
      firstname: newFirstName,
      lastName: newLastName,
    };
    console.log(newUserInfo);

    axios
      .post(`${url.server}${register}`, newUserInfo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-up">
      <form action="">
        <div className="double-input">
          <div className="input">
            <div className="login-text">First Name</div>
            <input
              type="text"
              className="sign-name"
              onChange={inputNewFirstName}
            />
          </div>
          <div className="input">
            <div className="login-text">Last Name</div>
            <input
              type="text"
              className="sign-name"
              onChange={inputNewLastName}
            />
          </div>
        </div>
        <div className="input" style={{ width: "100%" }}>
          <div className="login-text">User</div>
          <input
            type="email"
            className="login-password"
            onChange={inputNewUser}
          />
        </div>
        <div className="input" style={{ width: "100%" }}>
          <div className="login-text">Email</div>
          <input
            type="email"
            className="login-password"
            onChange={inputNewEmail}
          />
        </div>
        <div className="input" style={{ width: "100%" }}>
          <div className="login-text">Password</div>
          <input
            type="password"
            className="login-password"
            onChange={inputNewPassword}
          />
        </div>
        <div className="input" style={{ width: "100%" }}>
          <div className="login-text">Confirm Password</div>
          <input
            type="password"
            className="login-password"
            onChange={inputNewConfirmedPassword}
          />
        </div>
        <div className="button-login" onClick={registerUser}>
          Sign Up
        </div>
      </form>
    </div>
  );
};
