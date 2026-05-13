import React from "react";
import { 
  BiCheckCircle, 
  BiErrorCircle, 
  BiLoaderAlt, 
  BiInfoCircle 
} from "react-icons/bi";

const CustomToastify = ({ type, title, message, theme='light' }) => {
    const isDark = theme === "dark";
const config = {
    success: {
      icon: <BiCheckCircle className="text-2xl" />,
      bg: isDark ? "bg-green-950" : "bg-green-50",
      border: isDark ? "border-green-900" : "border-green-200",
      accent: isDark ? "text-green-400" : "text-green-600",
    },
    error: {
      icon: <BiErrorCircle className="text-2xl" />,
      bg: isDark ? "bg-red-950" : "bg-red-50",
      border: isDark ? "border-red-900" : "border-red-300",
      accent: isDark ? "text-red-400" : "text-red-600",
    },
    loading: {
      icon: <BiLoaderAlt className="text-2xl animate-spin" />,
      bg: isDark ? "bg-blue-950" : "bg-blue-50",
      border: isDark ? "border-blue-900" : "border-blue-200",
      accent: isDark ? "text-blue-400" : "text-blue-600",
    },
    info: {
      icon: <BiInfoCircle className="text-2xl" />,
      bg: isDark ? "bg-zinc-900" : "bg-gray-50",
      border: isDark ? "border-zinc-800" : "border-gray-200",
      accent: isDark ? "text-zinc-400" : "text-gray-600",
    },
  };;

  const style = config[type] || config.info;

  return (
    <div className={`flex items-start gap-4 p-1 w-full ${style.bg} ${style.border} border-l-4 rounded-md p-4`}>
      <div className={`${style.accent} mt-0.5`}>
        {style.icon}
      </div>
      <div className="flex flex-col">
        {title && (
          <h4 className={`font-bold  leading-none mb-1 ${style.accent}`}>
            {title}
          </h4>
        )}
        <p className="text-gray-700 text-sm md:text-sm leading-snug">
          {message}
        </p>
      </div>
    </div>
  );
};

export default CustomToastify;