import React from "react";
import { login } from "../services/auth";
const Login = () => {
  const handleLogin = () => {
    login().then((res) => {
      localStorage.setItem("token", res.data.user.token);
    });
  };

  return (
    <div>
      Login
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
