// Login.jsx (src)
import React from "react";

export default function Login() {
  return(
    <div className="container">
      <h1>Login</h1>
      <form action="/" method="post" name="loginForm" id="loginForm">
        <div className="field">
          <label htmlFor="id"></label>
          <input type="text" name="id" id="id" placeholder="id" />
        </div>
        <div className="field">
          <label htmlFor="pass"></label>
          <input type="password" name="pass" id="pass" placeholder="password" />
        </div>
        <button className="loginBtn">로그인</button>
      </form>
    </div>
  );
}