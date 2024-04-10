import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="component page">
        {/* INFO */}
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            accusantium id, quasi quam iure praesentium. Totam alias iusto qui
            minima!
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        {/* HERO-IMG */}
        <div>
          <img  src={main} alt="hero-img" className="hero-img" />
        </div>
      </div>
    </Wrapper>
  );
};



export default Landing;
