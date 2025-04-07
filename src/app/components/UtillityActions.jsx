import React from "react";
import { RxQuestionMark } from "react-icons/rx";
import { FaRegMessage, FaRegBell } from "react-icons/fa6";

const UtilityActions = () => {
  const iconClass = "h-6 w-6";
  const buttonClass =
    "hidden lg:block text-gray-500 transition-colors duration-200 hover:text-indigo-600 cursor-pointer";

  const actions = [
    { icon: <RxQuestionMark className={iconClass} />, label: "Help" },
    { icon: <FaRegMessage className={iconClass} />, label: "Messages" },
    { icon: <FaRegBell className={iconClass} />, label: "Notifications" },
  ];

  return (
    <div className="flex items-center gap-4">
      {actions.map((action, i) => (
        <button key={i} className={buttonClass} aria-label={action.label}>
          {action.icon}
        </button>
      ))}
      <div className="hidden h-8 w-8 cursor-pointer rounded-full lg:block">
        <img
          alt="Profile picture"
          src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
        />
      </div>
    </div>
  );
};

export default UtilityActions;
