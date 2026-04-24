import React from "react";
import { Outlet } from "react-router";
import TopBar from "../TopBar";
import MiddleBar from "../MiddleBar";
import Navber from "../Navber";

const MainLayouts = () => {
  return (
    <>
      <TopBar />
      <MiddleBar />
      <Navber/>
      <Outlet />
    </>
  );
};

export default MainLayouts;
