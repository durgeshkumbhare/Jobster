import React from "react";
import { BigSideBar, Navbar, SmallSideBar } from "../../components";
import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayouts = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <Navbar />
          <div className="dashborad-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayouts;
