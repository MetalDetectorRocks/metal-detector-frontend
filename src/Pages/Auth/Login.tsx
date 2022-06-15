import AuthService from "../../service/auth/auth.service";
import React from "react";
import {Button, TextField} from "@mui/material";

export const Login = () => {

  const login = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    }
    AuthService.login(target.email.value, target.password.value);
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
