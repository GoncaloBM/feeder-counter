import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const inputUser = (e) => {
    setUser(e.target.value);
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
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
        <div className="button-login">Sign In</div>
      </form>
    </div>
  );
};
