import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

const BigSideBar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
};

// const Wrapper = styled.aside`
// display: none;
// @media (min-width: 992px;) {
//   display: block;
// }
// `

export default BigSideBar;
