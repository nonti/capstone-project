import React, { useState } from "react";
import "./Login.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    props.toggle();
  };
  return (
    <div className="pop">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-container">
        <label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <EmailOutlinedIcon className="icons" />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordOutlinedIcon className="icons" />
        </label>
        </div>
        <div className="buttons">
          <button type="submit">Login</button>
          <button type="submit" onClick={props.toggle}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
