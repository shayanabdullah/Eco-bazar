import React, { useState } from "react";
import Container from "../components/layouts/Container";
import bg from "../assets/images/breadcrum-bg.webp";
import { GoHome } from "react-icons/go";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [message, setMessage] = useState("");

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
    const user = await axios.post(
      "http://localhost:5000/registration",
      registrationData,
    );
    const { success, message } = user.data;
    if(!success) {
      setMessage(message); 
      toast.error(message);  
    }else {
     setMessage(message)
     toast.success(message);  
    }
    console.log(user.data, registrationData);
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
                  className="py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <div className="password relative">
                  <input
                    type={showPass ? "text" : "password"}
                    className="py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 relative"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
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
                    className="py-3.5 px-4 border border-gray-1 w-full rounded-md font-poppins font-normal text-sm md:text-body-md placeholder:text-gray-4 text-gray-4 md:min-w-118 outline-gray-3 relative"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    name="confirmPassword"
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-between pb-5">
                <div className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="accent-primary"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="terms"
                    className="font-poppins font-normal text-xs sm:text-body-sm text-gray-6"
                  >
                    Accept all terms & Conditions
                  </label>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full rounded-full py-2.5 md:py-3.5 bg-primary cursor-pointer font-poppins font-semibold text-xs sm:text-body-sm text-white mb-5 "
              >
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
