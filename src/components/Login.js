import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/index";
import { toast } from "react-toastify";
import "./Login.css";
//import Logout from "./Logout";

const Login = ({ setUser, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    alert("Thank you for joining us! Hope you enjoy the Ice-cream!");
    const { token, user } = await loginUser(
      username,
      password,
      setLoginMessage
    );
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    localStorage.removeItem("username");
    localStorage.setItem("username", username);
    setUsername("");
    setPassword("");
    setUser(user);
    setIsLoggedIn(true);

    if (token) {
      toast.success("Login Successful");
      navigate("/Products");
    } else {
      toast.error("Login Failed");
      navigate("/Login");
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          className="usernameLogin"
          type="text"
          required
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="passwordLogin"
          type="password"
          required
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>

      <div className="register-link-container">
        <h3>Not a User Yet? </h3>
        <Link to="/SignUp" className="link">
          Sign up
        </Link>
        <div id="loginMessage">{loginMessage}</div>
      </div>
    </div>
  );
};

export default Login;
