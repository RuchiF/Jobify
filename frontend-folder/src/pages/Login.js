import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="register">
      <div className="register-form">
        <Logo />
        <p>Login</p>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
          <button className="btn btn-thin">Submit</button>

          <Link to="/dashboard">
            <button className="btn btn-thin explore-btn">
              Explore the app
            </button>
          </Link>

          <div className="askLogin">
            <span>Not a member yet?</span>
            <span className="ask-for-login">Register</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
