import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import bg from "../assets/images/breadcrum-bg.webp";
import { GoHome } from "react-icons/go";
import { BiChevronLeft, BiChevronRight, BiError } from "react-icons/bi";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import CustomToastify from "../components/common/CustomToastify";
import { motion } from 'motion/react';
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      console.log("user exits", token);
    } else {
      console.log("no user");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "remember") {
      setLoginData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setLoginData((prev) => ({
        ...prev,
        remember: prev.remember ? false : true,
      }));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setUserData("");
    try {
      const { email, password } = loginData;
      const userData = await axios.post(
        "http://localhost:5000/login",
        loginData,
      );
      setUserData(userData?.data);
      const { success, message, token } = userData?.data;
      const { remember } = loginData;
      if (success && token) {
        if (remember) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
      }
      
      if(!success){
           setErrorMessage(message);
        toast(<CustomToastify type="error" title="Error" message={message} />, {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
      }else {
        setMessage(message);
        toast(
          <CustomToastify
            type="loading"
            title="loging to your account... "
            message="Please wait while we login to your account."
          />,
          {
            position: "top-center",
            hideProgressBar: true,
            autoClose: 1000,
          },
        );
        setLoginData({
          email: "",
          password: "",
          remember: false,
        });
         const successToast = setTimeout(() => {
          toast(
            <CustomToastify
              type="success"
              title={message}
              message="you can start shopping now"
            />,
            {
              position: "top-center",
              hideProgressBar: true,
              autoClose: 5000,
            },
          );
          navigate('/')
        }, 1000);
      }
    } catch (error) {
      
      toast(
        <CustomToastify
          type="error"
          title="Error"
          message={
            error.response?.data?.message ||
            "An error occurred. Please try again."
          }
        />,
        {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
        },
      );
    } finally{ 
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const handleShow = () => {
    setShowPass((prev) => !prev);
  };
  return (
    <>
      <section className="relative">
        <Container>
          <div className="main w-full md:py-20 py-10 flex flex-col justify-center md:items-center px-4 md:px-0">
            <div className="p-4 md:p-6 shadow-2xl border border-gray-1 shadow-[#F2F2F2]  rounded-lg">
              <div className="text pb-5 text-center">
                <h2 className="font-poppins font-semibold text-[26px] md:text-3xl text-gray-9">
                  Sign In
                </h2>
              </div>
              <div className="inputs flex flex-col gap-y-3 pb-4">
                <input
                  type="text"
                  className="py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={loginData.email}
                />
                <div className="password relative">
                  <input
                    type={showPass ? "text" : "password"}
                    className="py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 relative"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={loginData.password}
                  />
                  <i
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-xl cursor-pointer"
                    onClick={handleShow}
                  >
                    {showPass ? <LuEyeOff /> : <LuEye />}
                  </i>
                </div>
              </div>
              <div className="w-full flex items-center justify-between pb-5">
                <div className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    checked={loginData.remember}
                    onChange={handleChange}
                    className="check"
                  />
                  <label
                    htmlFor="remember"
                    className="font-poppins font-normal text-xs sm:text-body-sm text-gray-6 label"
                  >
                    Remember me
                  </label>
                </div>
                <p className="font-poppins font-normal text-xs sm:text-body-sm text-gray-6 hover:underline cursor-pointer">
                  Forget Password
                </p>
              </div>
               {errorMessage && (
                              <p className="text-red-500 text-xs pb-5 flex items-center gap-x-2 max-w-100">
                                {" "}
                                <BiError className="text-xl" /> {errorMessage}
                              </p>
                            )}
             <motion.button
                whileTap={{scale: 1.02, transition: 0.3}}
                onClick={handleSubmit}
                className={`w-full rounded-full py-2.5 md:py-3.5 bg-primary cursor-pointer font-poppins font-semibold text-xs sm:text-body-sm text-white mb-5 ${loading ? " bg-hard-primary! opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-transparent border-2 border-white border-t-primary animate-spin"></span>
                    <span className="animate-pulse">
                      {message && !errorMessage &&
                         "Login..."
                        }
                    </span>
                  </span>
                ) : (
                  "Login"
                )}
              </motion.button>
              <div className="font-poppins font-normal text-xs sm:text-body-sm text-gray-6 text-center ">
                <p>
                  Don’t have account?{" "}
                  <span className="font-medium text-gray-9 underline">
                    <Link to={"/account/register"}>Register</Link>
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

export default Login;
