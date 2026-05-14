import React, { useState, useEffect } from "react";
import Container from "../components/layouts/Container";
import bg from "../assets/images/breadcrum-bg.webp";
import { GoHome } from "react-icons/go";
import { BiChevronLeft, BiChevronRight, BiError } from "react-icons/bi";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import CustomToastify from "../components/common/CustomToastify";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
 
   const navigate =  useNavigate()
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState("");
  const { email, password, confirmPassword, terms } = registrationData;

  const handleShow = () => {
    setShowPass((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "terms") {
      setRegistrationData({
        ...registrationData,
        [name]: value,
      });
    } else {
      setRegistrationData({
        ...registrationData,
        terms: !registrationData.terms,
      });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const user = await axios.post(
        "http://localhost:5000/registration",
        registrationData,
      );
      setUserData(user?.data);
      const { success, message } = user?.data;

      if (!success) {
        setErrorMessage(message);
        toast(<CustomToastify type="error" title="Error" message={message} />, {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
      } else {
        setMessage(message);
        toast(
          <CustomToastify
            type="loading"
            title="Account Creating... "
            message="Please wait while we create your account."
          />,
          {
            position: "top-center",
            hideProgressBar: true,
            autoClose: 1000,
          },
        );
        setRegistrationData({
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
        });
        const successToast = setTimeout(() => {
          toast(
            <CustomToastify
              type="success"
              title="Account Created"
              message="Check your email to verify your account."
            />,
            {
              position: "top-center",
              hideProgressBar: true,
              autoClose: 5000,
            },
          );
          navigate('/account/login')
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
    } finally {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
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
                  name="email"
                  className={`py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 transition-all duration-200 ${errorMessage.includes("email" || "account") || errorMessage ? "border-red-500" : ""}`}
                  placeholder="Email"
                  onChange={handleChange}
                  value={email}
                />
                <div className="password relative">
                  <input
                    type={showPass ? "text" : "password"}
                    className={`py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 transition-all duration-200 ${errorMessage.toLowerCase().includes("passwords") || errorMessage ? "border-red-500" : ""}`}
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    required
                  />
                  <i
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-xl cursor-pointer"
                    onClick={handleShow}
                  >
                    {showPass ? <LuEyeOff /> : <LuEye />}
                  </i>
                </div>
                <div className="password relative">
                  <input
                    type="password"
                    className={`py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 transition-all duration-200 ${errorMessage.toLowerCase().includes("passwords") || errorMessage.toLowerCase().includes("do not match") || errorMessage ? "border-red-500" : ""}`}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-between pb-3">
                <div className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="accent-primary check"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="terms"
                    className="font-poppins font-normal text-xs sm:text-body-sm text-gray-6 label relative cursor-pointer"
                  >
                    Accept all terms & Conditions
                  </label>
                </div>
              </div>
              {errorMessage && (
                <p className="text-red-500 text-xs pb-5 flex items-center gap-x-2 max-w-100">
                  {" "}
                  <BiError className="text-lg" /> {errorMessage}
                </p>
              )}
              <button
                onClick={handleSubmit}
                className={`w-full rounded-full py-2.5 md:py-3.5 bg-primary cursor-pointer font-poppins font-semibold text-xs sm:text-body-sm text-white mb-5 ${loading ? " bg-hard-primary! opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-transparent border-2 border-white border-t-primary animate-spin"></span>
                    <span className="animate-pulse">
                      {message && !errorMessage
                        ? "Redirecting to Login..."
                        : "Creating Account..."}
                    </span>
                  </span>
                ) : (
                  "Create Account"
                )}
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
