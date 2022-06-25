import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import useAxios from "axios-hooks";
import {AxiosError, AxiosResponse} from "axios";
import {useCookies} from "react-cookie";

export interface LoginResponse {
  readonly email: string;
  readonly token: string;
  readonly roles: string[];
}

export interface ErrorResponse {
  readonly timestamp: Date;
  readonly status: number;
  readonly error: string;
  readonly messages: string[];
}

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, executePost] = useAxios(
    {
      url: "/rest/v1/login",
      method: "POST"
    }
  );
  const [, setCookie,] = useCookies(["Authorization"]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setErrorMessage("");

    executePost({
      data: {
        email: email,
        password: password
      }
    })
      .then((response: AxiosResponse<LoginResponse>) => {
        setCookie("Authorization", `Bearer ${response.data.token}`, {
          path: "/", // ToDo: this correct?
          maxAge: 300,
          domain: "localhost", // ToDo: change later
          secure: false, // ToDo: change later
          // httpOnly: true, // ToDo: can only be set by server...
          sameSite: "lax" // ToDo: this correct?
        });
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        setErrorMessage(error.response?.data.messages.join(" ") as string);
      });
  }

  const handleEmailValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const renderErrorMessage = () => {
    return <div>{errorMessage}</div>;
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit.bind(this)}>
        <TextField type="email" name="email" label="Username" onChange={handleEmailValueChange.bind(this)} required autoFocus/>
        <TextField type="password" name="password" label="Password" onChange={handlePasswordValueChange.bind(this)} required/>
        {renderErrorMessage()}
        <Button type="submit">Login</Button>
      </form>
    </>
  );
}
