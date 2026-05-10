import React from "react";
import { Outlet, useLocation } from "react-router";
import TopBar from "../common/TopBar";
import MiddleBar from "../common/MiddleBar";
import Navber from "../common/Navber";
import Footer from "../common/Footer";
import MobileBottomNav from "../MobileBottomNav";
import Breadcrums from "../common/Breadcrums";

const MainLayouts = () => {
  const pathName = useLocation().pathname;
  return (
    <>
      <div className="sticky top-0 bg-white z-99">
        <TopBar />
        <MiddleBar />
        <Navber />
      </div>
      {pathName !== "/" && <Breadcrums />}
      <Outlet />
      <MobileBottomNav />
      <Footer />
    </>
  );
};

export default MainLayouts;
