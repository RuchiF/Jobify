import React, { useEffect } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
const Home = () => {
  // 852
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
  return (
    <div className="container">
      <Logo />
      <section className="hero">
        <div className="hero-text">
          <div className="heading">
            <span>Job</span>
            <span className="color-head"> Tracking</span>
            <span> App</span>
          </div>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <div className="buttons">
            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn">Login/Demo User</button>
            </Link>
          </div>
        </div>
        <div className="hero-img">
          <img src="./main.svg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
