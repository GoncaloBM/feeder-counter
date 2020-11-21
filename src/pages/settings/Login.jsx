import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { url, development } from "../../url";
import SettingsContext from "../../SettingContext";
import { LoginTrue } from "./login/LoginTrue";

export const Login = () => {
  const { settings } = useContext(SettingsContext);
  const [stateSettings, setStateSettings] = settings;

  axios.defaults.withCredentials = true;

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { login, server, online } = url;

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
      .post(`${development ? server : online}${login}`, userToLogin)
      .then((res) => {
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

  const checkLogin = () => {
    console.log(stateSettings.user.loggedIn);
    axios
      .get(`${development ? server : online}${login}`)
      .then((res) => {
        console.log(res);
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

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="login">
      {!stateSettings.user.loggedIn ? (
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
      ) : (
        <LoginTrue user={stateSettings.user.username} />
      )}
    </div>
  );
};
