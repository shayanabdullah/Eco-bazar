import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const VerifyEmail = ({ status }) => {
  const content = {
    success: {
      title: "Email Verified!",
      desc: "Your account is now active. You can start shopping for fresh organic products.",
      icon: "✅",
      btnText: "Login to Your Account",
      btnLink: "/account/login",
      color: "text-green-600",
    },
    failed: {
      title: "Verification Failed",
      desc: "The link is invalid or has expired. Please try resending the verification email.",
      icon: "❌",
      btnText: "Go to Login",
      btnLink: "/account/login",
      color: "text-red-600",
    },
    "already-verified": {
      title: "Already Verified",
      desc: "Your email has already been verified. You can proceed to login.",
      icon: "ℹ️",
      btnText: "Login Now",
      btnLink: "/account/login",
      color: "text-blue-600",
    },
  };

  const [loadingBtn, setLoadingBtn] = useState(true);

  const current = content[status] || content.failed;
  const navuigate = useNavigate();
  useEffect(() => {
    const Redirect = setTimeout(() => {
      setLoadingBtn(false);
      navuigate("/account/login");
    }, 3000);

    return () => clearTimeout(Redirect);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full">
        <div className="text-6xl mb-4">{current.icon}</div>
        <h1 className={`text-2xl font-bold mb-2 ${current.color}`}>
          {current.title}
        </h1>
        <p className="text-gray-600 mb-8">{current.desc}</p>

        <Link
          to={current.btnLink}
          className={`${loadingBtn ? "bg-green-gray-7   " : "bg-green-600 hover:bg-green-700"} inline-block w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200`}
        >
          <span className="flex items-center justify-center gap-2">
            <span className="w-5 h-5 rounded-full bg-transparent border-2 border-white border-t-primary animate-spin"></span>
            <span className="animate-pulse">Redirecting to Login...</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
