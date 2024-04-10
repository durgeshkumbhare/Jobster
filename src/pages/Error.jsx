import React from "react";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper>
      <img src={img} alt="not-found-img" />
      <h3>ohh! Page Not Found</h3>
      <p>We cant seem to find the page you're looking for</p>
      <Link to="/" className="btn">Back Home</Link>
    </Wrapper>
  );
};


export default Error;
