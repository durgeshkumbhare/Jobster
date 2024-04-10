import React from "react";
import Wrapper from "../assets/wrappers/JobInfo";


const JobsInfo = ({ icon, text }) => {
  return <Wrapper>
    <div className="icon">{icon}</div>
    <div className="text">{text}</div>
  </Wrapper>;
};

export default JobsInfo;
