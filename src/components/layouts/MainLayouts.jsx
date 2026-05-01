import React from "react";
import { Outlet } from "react-router";
import TopBar from "../TopBar";
import MiddleBar from "../MiddleBar";
import Navber from "../Navber";
import Footer from './../Footer';
import MobileBottomNav from "../MobileBottomNav";

const MainLayouts = () => {
  return (
    <>
      <div className="sticky top-0 bg-white z-99">
        <TopBar />
        <MiddleBar />
        <Navber />
      </div>
      <Outlet />
      <MobileBottomNav/>
      <Footer/>
    </>
  );
};

export default MainLayouts;
