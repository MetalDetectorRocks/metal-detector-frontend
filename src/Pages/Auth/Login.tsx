import React from "react";
import {Button, TextField} from "@mui/material";
import useAxios from "axios-hooks";
import {AxiosResponse} from "axios";
import {useCookies} from "react-cookie";

export interface LoginResponse {
  readonly email: string;
  readonly token: string;
  readonly roles: string[];
}

export const Login = () => {

  const [, executePost] = useAxios(
    {
      url: "/rest/v1/login",
      method: "POST"
    }
  )
  const [, setCookie,] = useCookies(["Authorization"]);

  const onClickLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    }

    executePost({
      data: {
        email: target.email.value,
        password: target.password.value
      }
    }).then((response: AxiosResponse<LoginResponse>) => {
      setCookie("Authorization", `Bearer ${response.data.token}`, {
        path: "/", // ToDo: this correct?
        maxAge: 300,
        domain: "localhost", // ToDo: change later
        secure: false, // ToDo: change later
        // httpOnly: true, // ToDo: can only be set by server...
        sameSite: "lax" // ToDo: this correct?
      });
    });
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onClickLogin.bind(this)}>
        <TextField type="email" name="email" label="Username"/>
        <TextField type="password" name="password" label="Password"/>
        <Button type="submit">Login</Button>
      </form>
    </>
  )
}
