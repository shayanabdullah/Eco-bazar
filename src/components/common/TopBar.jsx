import React, { useRef, useState } from "react";
import Container from "./../layouts/Container";
import { LuMapPin } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";
import { AnimatePresence } from "framer-motion";
import useClickOutside from "../../hooks/useClickOutside";
import { Link } from "react-router";
import eng from "../../assets/icons/eng.svg";
import bd from "../../assets/icons/bd.svg";
import jp from "../../assets/icons/jp.svg";
import { motion } from "motion/react";

const TopBar = () => {
  const [openLan, setOpenLan] = useState(false);
  const [openCurrency, setOpenCurrency] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  const [currentlan, setCurrentLan] = useState("Eng");

  const dropDownlanRef = useRef(null);
  const dropDownCurRef = useRef(null);
  useClickOutside(
    dropDownlanRef,
    () => setOpenLan(false),
    "mousedown",
    openLan,
  );
  useClickOutside(
    dropDownCurRef,
    () => setOpenCurrency(false),
    "mousedown",
    openCurrency,
  );

  return (
    <header className="py-3 border-b border-gray-1">
      <Container>
        <div className=" hidden lg:flex justify-between items-center font-poppins text-body-xs text-gray-6 font-normal">
          {/* LEFT */}
          <div className="flex items-center gap-x-1">
            <LuMapPin className="text-body-sm" />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-x-10 ">
            <div className="flex items-center gap-x-5 relative divider">
              {/* LANGUAGE */}
              <div className="flex items-center ">
                <div
                  className="flex items-center gap-x-1 cursor-pointer"
                  onClick={() => setOpenLan(!openLan)}
                  ref={dropDownlanRef}
                >
                  {currentlan == "Eng" ? (
                    <>
                      <img
                        src={eng}
                        alt="icon"
                        fetchPriority="high"
                        width={15}
                      />
                      {currentlan}
                    </>
                  ) : currentlan == "BN" ? (
                    <>
                      <img
                        src={bd}
                        alt="icon"
                        fetchPriority="high"
                        width={15}
                      />
                      {currentlan}
                    </>
                  ) : (
                    <>
                      <img
                        src={jp}
                        alt="icon"
                        fetchPriority="high"
                        width={15}
                      />
                      {currentlan}
                    </>
                  )}
                  <IoChevronDownOutline />
                </div>

                {/* DROPDOWN */}
                <AnimatePresence>
                  {openLan && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setOpenLan(false)}
                      className="bg-gray-0 rounded-sm text-body-sm absolute top-[122%] w-1/2 z-50 left-0 shadow-md "
                    >
                      <ul className="size-full flex flex-col gap-y-1">
                        {currentlan !== "Eng" && (
                          <li
                            className="hover:bg-gray-2 hover:text-gray-7 transition-all duration-200  cursor-pointer flex items-center gap-x-1 p-1"
                            onClick={() => setCurrentLan("Eng")}
                          >
                            <img
                              src={eng}
                              alt="icon"
                              fetchPriority="high"
                              width={15}
                            />
                            Eng
                          </li>
                        )}
                        {currentlan !== "BN" && (
                          <li
                            className="hover:bg-gray-2 hover:text-gray-7 transition-all duration-200  cursor-pointer flex items-center gap-x-1 p-1"
                            onClick={() => setCurrentLan("BN")}
                          >
                            <img
                              src={bd}
                              alt="icon"
                              fetchPriority="high"
                              width={15}
                            />
                            BN
                          </li>
                        )}
                        {currentlan !== "JP" && (
                          <li
                            className="hover:bg-gray-2 hover:text-gray-7 transition-all duration-200  cursor-pointer flex items-center gap-x-1 p-1"
                            onClick={() => setCurrentLan("JP")}
                          >
                            <img
                              src={jp}
                              alt="icon"
                              fetchPriority="high"
                              width={15}
                            />
                            JP
                          </li>
                        )}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CURRENCY */}
              <div className="flex items-center relative">
                <div
                  className="flex items-center gap-x-1.25 cursor-pointer"
                  onClick={() => setOpenCurrency((prev) => !prev)}
                  ref={dropDownCurRef}
                >
                  {currentCurrency} <IoChevronDownOutline />
                </div>

                {/* DROPDOWN */}
                <AnimatePresence>
                  {openCurrency && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-0 rounded-sm text-body-sm absolute top-[122%] z-50 left-0 shadow-md"
                    >
                      <ul>
                        {currentCurrency !== "USD" && (
                          <li
                            className="hover:bg-gray-2 px-3 py-1 cursor-pointer"
                            onClick={() => setCurrentLan("USD")}
                          >
                            USD
                          </li>
                        )}
                        <li
                          className="hover:bg-gray-2 px-3 py-1 cursor-pointer"
                          onClick={() => setCurrentCurrency("BDT")}
                        >
                          BDT
                        </li>
                        <li
                          className="hover:bg-gray-2 px-3 py-1 cursor-pointer"
                          onClick={() => setCurrentCurrency("INR")}
                        >
                          INR
                        </li>
                        <li
                          className="hover:bg-gray-2 px-3 py-1 cursor-pointer"
                          onClick={() => setCurrentCurrency("EUR")}
                        >
                          EUR
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {/* AUTH */}
            <Link to={"/account/login"}>
            <div className="capitalize cursor-pointer">
              <p>Sign in / Sign Up</p>
            </div>
            </Link>
          </div>
        </div>

        {/* mobilo topbar */}
        <div className="w-full flex justify-center lg:hidden ">
          <div className="flex items-center gap-x-1 text-body-xs font-poppins font-medium">
            <LuMapPin className="text-body-sm" />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>
        </div>
      </Container>
    </header>
  );
};

export default TopBar;
