import React from "react";
import { BsPersonFill, BsShop } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router";
import { SlHandbag } from "react-icons/sl";
import { MdOutlineHome } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

const MobileBottomNav = () => {
  return (
    <section className="lg:hidden">
      <div className="fixed bottom-0 w-full py-2 px-8 bg-green-gray-8 flex items-center justify-between md:justify-center md:gap-x-20 z-29">

        <div className="home ">
         
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              color: isActive ? "#edf2ee" : "#ffffffb9",
              textDecoration: "none",
            })}
            className={'text-[11px] sm:text-sm flex flex-col items-center justify-center gap-y-1 font-poppins font-medium uppercase w-full'}
          >
             <GoHome className="text-2xl" />
             home
          </NavLink>
        </div>

        <div className="Shop ">
          <NavLink
            to={"/shop"}
            style={({ isActive }) => ({
                color: isActive ? "#edf2ee" : "#ffffffb9",
              textDecoration: "none",
            })}
            className={'text-[11px] sm:text-sm flex flex-col items-center justify-center gap-y-1 font-poppins font-medium uppercase w-full'}
          >
             <FaShoppingBasket className="text-2xl" />
             Shop
          </NavLink>
        </div>
        <div className="Cart relative">
          <NavLink
            to={"/cart"}
            style={({ isActive }) => ({
              color: isActive ? "#edf2ee" : "#ffffffb9",
              textDecoration: "none",
            })}
            className={'text-[11px] sm:text-sm flex flex-col items-center justify-center gap-y-1 font-poppins font-medium  w-full uppercase'}
          >
            <span className="absolute -top-2 -right-0.5 w-4 h-4 flex items-center justify-center  rounded-full bg-badge-blue text-white font-poppins font-medium text-[10px]">
              2
            </span>
             <SlHandbag className="text-2xl" />
             Cart
          </NavLink>
        </div>
        <div className="Search ">
          <NavLink
            to={"/search"}
            style={({ isActive }) => ({
              color: isActive ? "#edf2ee" : "#ffffffb9",
              textDecoration: "none",
            })}
            className={'text-[11px] sm:text-sm flex flex-col items-center justify-center gap-y-1 font-poppins font-medium  w-full uppercase'}
          >
             <IoSearchOutline  className="text-2xl" />
             Search
          </NavLink>
        </div>
        <div className="account ">
          <NavLink
            to={"/account/login"}
            style={({ isActive }) => ({
              color: isActive ? "#edf2ee" : "#ffffffb9",
              textDecoration: "none",
            })}
            className={'text-[11px] sm:text-sm flex flex-col items-center justify-center gap-y-1 font-poppins font-medium uppercase w-full'}
          >
             <BsPersonFill  className="text-2xl" />
             account
          </NavLink>
        </div>

 
      </div>
    </section>
  );
};

export default MobileBottomNav;
