import React, { useState } from "react";

import Board from "../Board";

const Login = ({ passwordText, setPasswordText, usernameText, setUsernameText }) => {
  function handleUsername(e) {
    e.preventDefault();
    const newUsername = e.target.value;
    setUsernameText(newUsername);
  }

  function handlePassword(e) {
    e.preventDefault();
    const newPassword = e.target.value;
    setPasswordText(newPassword);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const form = {
      username: usernameText,
      password: passwordText,
    };
    // console.log("My username: ", usernameText, "My password: ", passwordText);

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameText,
        password: passwordText,
      }),
    };

    const response = await fetch("http://localhost:3000/users/login", options);
    const data = await response.json();
    console.log(data);
    if (response.status == 200) {
      localStorage.setItem("discretionUser", data["token"]);
    } else {
      alert(`Error: ${data["error"]}`);
    }
  }

  return (
    <div className="login-form">
      <h1> Fill in your details to login to the Diary app</h1>
      <form>
        <label for="username">Username</label>
        <input id="username" type="text" value={usernameText} onChange={handleUsername} />
        <label for="password">Password</label>
        <input id="password" type="password" value={passwordText} onChange={handlePassword} />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Login;
