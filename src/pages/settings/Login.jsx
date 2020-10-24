import React, { useState, useContext } from "react";
import axios from "axios";
import "./Login.css";
import { url } from "../../url";
import SettingsContext from "../../SettingContext";

export const Login = () => {
  const { settings } = useContext(SettingsContext);
  const [stateSettings, setStateSettings] = settings;

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { login, server ,online} = url;

  const inputUser = (e) => {
    setUser(e.target.value);
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = () => {
    let userToLogin = {
      username: user,
      password: password,
    };

    axios
      .post(`${online}${login}`, userToLogin)
      .then((res) => {
        console.log(res.data);
        setStateSettings((prevState) => ({
          ...prevState,
          user: {
            ...prevState.user,
            loggedIn: res.data.loggedIn,
            username: res.data.username,
          },
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <form action="">
        <div className="input">
          <div className="login-text">User</div>
          <input type="text" className="login-user" onChange={inputUser} />
        </div>
        <div className="input">
          <div className="login-text">Password</div>
          <input
            type="password"
            className="login-password"
            onChange={inputPassword}
          />
        </div>
        <div className="button-login" onClick={loginUser}>
          Login In
        </div>
      </form>
    </div>
  );
};
