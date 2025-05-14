import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Button = ({ children, customClass }) => {
  return (
    <div className="group ">
      <button
        className={`relative font-medium  group-hover:text-white z-10 overflow-hidden w-full mx-auto cursor-pointer `}
      >
        <span className={`flex items-center justify-center  ${customClass}`}>
          <span className="relative z-10 text-primary-t group-hover:text-white transition-all duration-700">
            {children}
          </span>
        </span>

        <span className="absolute -top-7 left-0 w-3/4 opacity-0 group-hover:opacity-100 h-20 bg-dark-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-r-full" />
        <span className="absolute -bottom-7  right-0 w-3/4 opacity-0 group-hover:opacity-100 h-20 bg-dark-green transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-l-full" />
      </button>
    </div>
  );
};

export default Button;
