import React, { useState } from "react";
import "../Login/Login.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../auth/Authenticate.jsx";

const Login = () => {
  const { user, loginUpdate } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      loginUpdate(response.data);
      toast.success("Login Successfully", { position: "top-center" });

      setTimeout(() => {
        navigate("/products");
      }, 1000);
      console.log("User data", user);
      console.log("Login response:", response.data);
    } catch (error) {
      toast.error("Login Failed. Please try again.", {
        position: "top-center",
      });
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <h2>Login</h2>
      <form className="login-form" onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onUserNameChange}
            required
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onPasswordChange}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
