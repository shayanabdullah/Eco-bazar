import React from "react";
import { Outlet } from "react-router";
import TopBar from "../TopBar";
import MiddleBar from "../MiddleBar";

const MainLayouts = () => {
  return (
    <>
      <TopBar />
      <MiddleBar />
      <Outlet />
    </>
  );
};

export default MainLayouts;
