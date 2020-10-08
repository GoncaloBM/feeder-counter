import React from "react";
import './Login.css'

export const Login = () => {
  return (
    <div className="login">
      <form action="">
          <input type="text"className='login-user'/>
          <input type="password" className='login-password'/>
      </form>
    </div>
  );
};
