import React, { useState } from "react";
import "./Login.css";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

export const LoginScreen = () => {
  const [screen, setScreen] = useState("login");
  return (
    <div className="login-screen">
      <div className="login-choices">
        <div className="login-choice" onClick={() => setScreen("login")} style={{ color: screen === "login" && '#cabbe9' }}>
          Login
        </div>
        <div className="login-choice" onClick={() => setScreen("sign")} style={{ color: screen === "sign" && '#cabbe9' }}>
          Sign Up
        </div>
        <div
          className="login-border"
          style={{ left: screen === "login" ? "0%" : "50%" }}
        ></div>
      </div>
      {screen === "login" && <Login />}
      {screen === "sign" && <SignUp />}
    </div>
  );
};
