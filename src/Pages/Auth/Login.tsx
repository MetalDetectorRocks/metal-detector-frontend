import AuthService from "../../service/auth/auth.service";
import React from "react";
import {Button, TextField} from "@mui/material";

export const Login = () => {

  const login = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("TEST button");
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    }
    const email = target.email.value;
    const password = target.password.value;
    AuthService.login(email, password);
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={login.bind(this)}>
        <TextField type="email" name="email" label="Username"/>
        <TextField type="password" name="password" label="Password"/>
        <Button type="submit">Login</Button>
      </form>
    </>
  )
}
