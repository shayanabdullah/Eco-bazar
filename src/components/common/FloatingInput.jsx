import React, { useState } from "react";

const FloatingInput = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  error,
  rightElement,
  className = "",
}) => {

    const [active, setActive] = useState(false);

  return (
    <div className="w-full">
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder=" "
          className={`peer w-full py-3.5 px-4 ${rightElement ? "pr-11" : ""} border  rounded-md font-poppins font-normal text-sm md:text-body-md text-gray-4 md:min-w-118 transition-all duration-200 ease-in-out placeholder-transparent 
            ${error ? "border-red-500 outline-red-500" : "border-gray-1 outline-gray-3"}
            ${active ? "border-primary/50 outline-primary/50" : ""}
             ${className}`}
        />

        <label
          htmlFor={id}
          className={`absolute left-4 top-1/2 -translate-y-1/2 px-1 bg-white text-sm md:text-body-md font-poppins pointer-events-none transition-all duration-200 ease-in-out
            peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm
            peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-sm
            ${error ? "text-red-500" : "text-gray-4 peer-focus:text-primary"}`}
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>

        {rightElement && (
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            {rightElement}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-500 font-poppins">{error}</p>
      )}
    </div>
  );
};

export default FloatingInput;