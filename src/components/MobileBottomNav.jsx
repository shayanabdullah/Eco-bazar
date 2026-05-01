import React from "react";
import { BsPersonFill, BsShop } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router";
import { SlHandbag } from "react-icons/sl";
const MobileBottomNav = () => {
  return (
    <section className="md:hidden">
      <div className="fixed bottom-0 w-full py-3 px-5 bg-white flex items-center justify-between z-29">
        <div className="home ">
         
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              color: isActive ? "green" : "#808080",
              textDecoration: "none",
            })}
            className={'text-sm flex flex-col items-center justify-center gap-y-1 font-poppins font-medium capitalize'}
          >
             <GoHome className="text-3xl" />
             home
          </NavLink>
        </div>

        <div className="Shop ">
          <NavLink
            to={"/shop"}
            style={({ isActive }) => ({
              color: isActive ? "green" : "#808080",
              textDecoration: "none",
            })}
            className={'text-sm flex flex-col items-center justify-center gap-y-1 font-poppins font-medium capitalize'}
          >
             <FaShoppingBasket className="text-3xl" />
             Shop
          </NavLink>
        </div>
        <div className="Cart ">
          <NavLink
            to={"/cart"}
            style={({ isActive }) => ({
              color: isActive ? "green" : "#808080",
              textDecoration: "none",
            })}
            className={'text-sm flex flex-col items-center justify-center gap-y-1 font-poppins font-medium capitalize'}
          >
             <SlHandbag className="text-3xl" />
             Cart
          </NavLink>
        </div>
        <div className="account ">
          <NavLink
            to={"/login"}
            style={({ isActive }) => ({
              color: isActive ? "green" : "#808080",
              textDecoration: "none",
            })}
            className={'text-sm flex flex-col items-center justify-center gap-y-1 font-poppins font-medium capitalize'}
          >
             <BsPersonFill  className="text-3xl" />
             account
          </NavLink>
        </div>

 
      </div>
    </section>
  );
};

export default MobileBottomNav;
