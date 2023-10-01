//import React, { useState } from "react";
import { registerUser } from "../api";
import "./SignUp.css";

const SignUp = (props) => {
  const { token, setToken, username, setUsername, password, setPassword } =
    props;

  const userSubmit = async (event) => {
    event.preventDefault();
    alert("Thank you for Signing up!");
    try {
      const result = await registerUser(username, password);
      if (result.message === "You're signed up!") {
        localStorage.setItem("token", result.token);

        console.log(result);
        setToken(result.token);
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setUsername("");
      setPassword("");
    }
  };
  if (!token) {
    return (
      <div>
        <h1 className="signup-header">Sign up</h1>
        <form className="sign-up-form" onSubmit={userSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  } else if (token) {
    return <h1>Thank you for signing up!</h1>;
  }
};

export default SignUp;
