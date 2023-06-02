import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { LoginWithGithub } from "./LoginWithGithub";

export const LoginForm = () => {
  const [username, setUsername] = useState("meteorite");
  const [password, setPassword] = useState("password");

  const submit = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  return (
    <form onSubmit={submit} className="login-form">
      <LoginWithGithub />
      <div>
        <label htmlFor="username">Username</label>

        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button type="submit" className="login-btn">Log In</button>
      </div>
    </form>
  );
};
