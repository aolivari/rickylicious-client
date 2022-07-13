import React from "react";
import Input from "./components/Input/Input";
import Label from "./components/Label/Label";
import Tittle from "./components/Title/Tittle";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <Tittle text=" Login" />
      <Label text="Email" />
      <Input />
      <Label text="Password" />
      <Input />
    </div>
  );
}

export default Login;
