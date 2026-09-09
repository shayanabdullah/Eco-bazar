import React, { useState } from "react";
import Container from "../components/layouts/Container";
import { LuEye, LuEyeOff, LuLoaderCircle } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import CustomToastify from "../components/common/CustomToastify";
import FloatingInput from "../components/common/FloatingInput";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  const [registrationData, setRegistrationData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",

  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { fullName, email, password, confirmPassword, terms } = registrationData;

  const handleShow = () => {
    setShowPass((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/registration`,
        registrationData,
      );

      if (!data.success) {
        throw new Error(data.message);
      }

      toast(
        <CustomToastify
          type="success"
          title="Account Created"
          message="Check your email to verify your account."
        />,
        {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 4000,
        },
      );

      setRegistrationData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });

      navigate("/account/login");
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || "Unable to create your account."
        : "Something went wrong. Please try again.";

      setError(errorMessage);

      toast(
        <CustomToastify
          type="error"
          title="Registration Failed"
          message={errorMessage}
        />,
        {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 4000,
        },
      );
    } finally {
      setLoading(false);
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
              <form onSubmit={handleSubmit}>
                <div className="inputs flex flex-col gap-y-3 pb-4">
                  <FloatingInput
                    id="fullName"
                    name="fullName"
                    type="text"
                    label="Full Name"
                    value={fullName}
                    error={error}
                    onChange={handleChange}
                    required
                  />

                  <FloatingInput
                    id="email"
                    name="email"
                    type="text"
                    label="Email"
                    value={email}
                    onChange={handleChange}
                    required
                  />

                  <FloatingInput
                    id="password"
                    name="password"
                    type={showPass ? "text" : "password"}
                    label="Password"
                    value={password}
                    onChange={handleChange}
                    required
                    rightElement={
                      <i
                        className="text-xl cursor-pointer text-gray-4"
                        onClick={handleShow}
                      >
                        {showPass ? <LuEyeOff /> : <LuEye />}
                      </i>
                    }
                  />

                  <FloatingInput
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full pb-3">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="accent-primary check"
                    onChange={() => {
                      setRegistrationData((prev) => ({
                        ...prev,
                        terms: !prev.terms,
                      }));
                    }}
                    checked={terms}
                    hidden
                  />
                  <label
                    htmlFor="terms"
                    className="font-poppins font-normal text-body-sm text-gray-6 label relative cursor-pointer pb-2"
                  >
                    Accept all terms & Conditions
                  </label>
                </div>

                <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-full py-2.5 md:py-3.5 bg-primary font-poppins font-semibold text-xs sm:text-body-sm text-white mb-5
                   ${loading ? "opacity-50 cursor-not-allowed!  bg-hard-primary! flex gap-x-3 justify-center" : "cursor-pointer"}`}
              >
                { loading &&  <LuLoaderCircle className="animate-spin" size={20} />}
                {loading ? "Creating Account..." : "Create Account"}
              </button>
              </form>

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