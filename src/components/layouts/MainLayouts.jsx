import React from "react";
import { Outlet } from "react-router";
import TopBar from "../TopBar";
import MiddleBar from "../MiddleBar";
import Navber from "../Navber";

const MainLayouts = () => {
  return (
    <>
      <div className="sticky top-0 bg-white z-9999999">
        <TopBar />
        <MiddleBar />
        <Navber />
      </div>
      <Outlet />
    </>
  );
};

export default MainLayouts;
