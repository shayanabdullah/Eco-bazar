import React, { useState } from "react";
import Container from "../components/layouts/Container";
import bg from "../assets/images/breadcrum-bg.webp";
import { GoHome } from "react-icons/go";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link } from 'react-router';

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [type, setType] = useState("password");

  const handleShow = () => {
    setShowPass((prev) => !prev);
    setType(showPass ? "text" : "password");
  };
  return (
    <>
      <section className="relative">
        <img
          src={bg}
          alt="bg"
          width={"100%"}
          height={"100%"}
          className="absolute top-0 left-0 -z-1 "
        />

        <Container>
          {/* Temporary Bread crums */}
          <div className="main md:py-12">
            <div className="flex items-center gap-3.5 text-gray-5 text-2xl">
              <GoHome />
              <BiChevronRight />
              <span className="font-poppins font-normal text-body-md text-gray-4">
                Account
              </span>
              <BiChevronRight />
              <span className="text-primaryfont-poppins font-normal text-body-md text-primary">
                {" "}
                Login
              </span>
            </div>
          </div>

          <div className="main w-full md:py-20 py-10 flex flex-col justify-center md:items-center px-4 md:px-0">
            <div className="p-4 md:p-6 shadow-2xl border border-gray-1 shadow-[#F2F2F2]  rounded-lg">
              <div className="text pb-5 text-center">
                <h2 className="font-poppins font-semibold text-3xl text-gray-9">
                  Sign In
                </h2>
              </div>
              <div className="inputs flex flex-col gap-y-3 pb-4">
                <input
                  type="text"
                  className="py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3"
                  placeholder="Email"
                />
                <div className="password relative">
                  <input
                    type={type}
                    className="py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 relative"
                    placeholder="Password"
                  />
                  <i
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-xl cursor-pointer"
                    onClick={handleShow}
                  >
                    {type == "text" ? <LuEyeOff /> : <LuEye />}
                  </i>
                </div>
              </div>
              <div className="w-full flex items-center justify-between pb-5">
                <div className="flex items-center gap-x-2">
                  <input type="checkbox" name="forget" id="forget" />
                  <label
                    htmlFor="forget"
                    className="font-poppins font-normal text-body-sm text-gray-6"
                  >
                    Remember me
                  </label>
                </div>
                <p className="font-poppins font-normal text-body-sm text-gray-6">
                  Forget Password
                </p>
              </div>
              <button className="w-full rounded-full py-3.5 bg-primary cursor-pointer font-poppins font-semibold text-body-sm text-white mb-5 ">Login</button>
              <div className="font-poppins font-normal text-body-sm text-gray-6 text-center ">
                <p>Don’t have account? <span className="font-medium text-gray-9 underline"><Link to={'/register'}>Register</Link></span></p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Login;
