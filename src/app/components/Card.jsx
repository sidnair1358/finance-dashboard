import React from "react";

const COLOR_VARIANTS = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-400",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-400",
  },
  pink: {
    bg: "bg-pink-50",
    text: "text-pink-400",
  },
};

const Card = ({ data, colour = "blue", children }) => {
  const colorKey = colour.toLowerCase();
  const { bg: bgClass, text: textClass } =
    COLOR_VARIANTS[colorKey] || COLOR_VARIANTS.blue;

  return (
    <div
      className={`space-y-5 rounded-lg ${bgClass} p-6 text-center font-medium shadow-sm md:text-left`}
    >
      <h4 className="text-md">{children}</h4>
      <h2 className={`${textClass} text-2xl font-bold`}>{data}</h2>
    </div>
  );
};

export default Card;
