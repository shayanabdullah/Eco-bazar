import React, { useState } from "react";
import Container from "../components/layouts/Container";
import bg from "../assets/images/breadcrum-bg.webp";
import { GoHome } from "react-icons/go";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link } from "react-router";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const [type, setType] = useState("password");
  const [typeCon, setTypeCon] = useState("password");

  const handleShow = () => {
    setShowPass((prev) => !prev);
    setType(showPass ? "text" : "password");
  };
  const handleShowCon = () => {
    setShowConPass((prev) => !prev);
    setTypeCon(showConPass ? "text" : "password");
  };

  return (
    <>
      <section className="relative">
        <Container>
          <div className="main w-full md:py-20 py-10 flex flex-col justify-center md:items-center px-4 md:px-0">
            <div className="p-4 md:p-6 shadow-2xl border border-gray-1 shadow-[#F2F2F2]  rounded-lg">
              <div className="text pb-5 text-center">
                <h2 className="font-poppins font-semibold text-2xl sm:text-3xl text-gray-9">
                  Create Account
                </h2>
              </div>
              <div className="inputs flex flex-col gap-y-3 pb-4">
                <input
                  type="text"
                  className="py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3"
                  placeholder="Email"
                />
                <div className="password relative">
                  <input
                    type={type}
                    className="py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 relative"
                    placeholder="Password"
                  />
                  <i
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-xl cursor-pointer"
                    onClick={handleShow}
                  >
                    {type == "text" ? <LuEyeOff /> : <LuEye />}
                  </i>
                </div>
                <div className="password relative">
                  <input
                    type={typeCon}
                    className="py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 relative"
                    placeholder="Confirm Password"
                  />
                  <i
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-xl cursor-pointer"
                    onClick={handleShowCon}
                  >
                    {typeCon == "text" ? <LuEyeOff /> : <LuEye />}
                  </i>
                </div>
              </div>
              <div className="w-full flex items-center justify-between pb-5">
                <div className="flex items-center gap-x-2">
                  <input type="checkbox" name="forget" id="forget" />
                  <label
                    htmlFor="forget"
                    className="font-poppins font-normal text-xs sm:text-body-sm text-gray-6"
                  >
                    Accept all terms & Conditions
                  </label>
                </div>
              </div>
              <button className="w-full rounded-full py-2.5 md:py-3.5 bg-primary cursor-pointer font-poppins font-semibold text-xs sm:text-body-sm text-white mb-5 ">
                Create Account
              </button>
              <div className="font-poppins font-normal text-xs sm:text-body-sm text-gray-6 text-center ">
                <p>
                  Already have account{" "}
                  <span className="font-medium text-gray-9 underline">
                    <Link to={"/account/login"}>Login</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Register;
