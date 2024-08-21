import React from "react";
import Logo from "../components/Logo";
const Register = () => {
  return (
    <section className="register">
      <div className="register-form">
        <Logo />
        <p>Register</p>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" />
          <label htmlFor="location">Location</label>
          <input type="text" id="location" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
          <button className="btn btn-thin">Submit</button>
          <div className="askLogin">
            <span>Already a member?</span>
            <span className="ask-for-login">Login</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
