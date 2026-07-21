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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState("");
  const { email, password, confirmPassword, name } = registrationData;

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

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      if (registrationData.name && registrationData.email && registrationData.password && registrationData.confirmPassword && !registrationData.terms) {
        setErrors((prev) => ({
          ...prev,
          terms: "Please accept the terms and conditions.",
        }));
        setLoading(false);
        return;
      }
      const user = await axios.post(
        "https://ecobazar-api.onrender.com/api/auth/register",
        registrationData,
      );

      setUserData(user?.data);
      const { success, message } = user?.data;

      if (success) {
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
          navigate("/account/login");
        }, 1000);
        clearTimeout(successToast);
      }
    } catch (error) {
      const message = error.response?.data?.message || "";

      const newErrors = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      };

      if (message.toLowerCase().includes("name")) {
        newErrors.name = message;
      }

      if (message.toLowerCase().includes("email")) {
        newErrors.email = message;
      }

      if (
        message.toLowerCase().includes("password") &&
        !message.toLowerCase().includes("confirm") &&
        !message.toLowerCase().includes("match")
      ) {
        newErrors.password = message;
      }

      if (
        message.toLowerCase().includes("confirm") ||
        message.toLowerCase().includes("match")
      ) {
        newErrors.confirmPassword = message;
      }

      setErrors(newErrors);

      toast(<CustomToastify type="error" title="Error" message={message} />, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
      });
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
                  name="name"
                  className={`py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 transition-all duration-200 ${errors.name ? "border-red-500" : ""}`}
                  placeholder="Enter your Name"
                  onChange={handleChange}
                  value={name}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs -mt-1 flex items-center gap-2">
                    <BiError className="text-lg" /> {errors.name}
                  </p>
                )}
                <input
                  type="text"
                  name="email"
                  className={`py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 transition-all duration-200 ${errors.email ? "border-red-500" : ""}`}
                  placeholder="Email"
                  onChange={handleChange}
                  value={email}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs -mt-1 flex items-center gap-2">
                    <BiError className="text-lg" /> {errors.email}
                  </p>
                )}
                <div className="password relative">
                  <input
                    type={showPass ? "text" : "password"}
                    className={`py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 transition-all duration-200 ${errors.password ? "border-red-500" : ""}`}
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    required
                  />
                  <i
                    className="absolute top-[35%] right-4 -translate-y-[35%] text-xl cursor-pointer"
                    onClick={handleShow}
                  >
                    {showPass ? <LuEyeOff /> : <LuEye />}
                  </i>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-2">
                      <BiError className="text-lg" /> {errors.password}
                    </p>
                  )}
                </div>
                <div className="password relative">
                  <input
                    type="password"
                    className={`py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 transition-all duration-200 ${errors.confirmPassword ? "border-red-500" : ""}`}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-2">
                      <BiError className="text-lg" /> {errors.confirmPassword}
                    </p>
                  )}
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
                <div className="">
                   
                  {errors.terms && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-2">
                      <BiError className="text-lg" />
                      {errors.terms}
                    </p>
                  )}
                </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className={`w-full rounded-full py-2.5 md:py-3.5 bg-primary cursor-pointer font-poppins font-semibold text-xs sm:text-body-sm text-white mb-5 ${loading ? " bg-hard-primary! opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-transparent border-2 border-white border-t-primary animate-spin"></span>
                    <span className="animate-pulse">
                      {message && !errors
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
