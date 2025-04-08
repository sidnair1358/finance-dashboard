import React from "react";

const Button = ({ primary = false, icon, children = "Button" }) => {
  const baseClasses =
    "inline-flex items-center text-nowrap justify-around rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

  const sizeClasses = "px-4 py-2 text-sm";

  const variantClasses = primary
    ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm"
    : "bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50";

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses}`}>
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
