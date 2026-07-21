import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Accordion = ({
  title,
  children,
  icon= <FaChevronDown />,
  iconBg,
  border,
  borderColor,
  titleBorder,
  fontWeight,
  titleColor,
  bg,
  bgColor,
  fontSize,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleShow = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <div
        className={`header w-full flex justify-between items-start cursor-pointer pt-3 ${
          titleBorder && titleBorder
        }`}
        onClick={handleShow}
      >
        <span
          className={`text-${
            (titleColor && titleColor) || "text-gray-9"
          } ${fontSize && fontSize} font-poppins font-${
            (fontWeight && fontWeight) || "semibold" || "medium"
          }  ${bg && `bg-${bgColor}`}`}
        >
          {title}
        </span>
        <span
          className={`text-lg transition-all duration-200 ${
            isOpen && "-rotate-180"
          } ${iconBg && `bg-${iconBg || "bg-gray-100"}`}`}
        >
          {icon}
        </span>
      </div>
      {isOpen && <div className={`${border && border} mt-5`}>{children}</div>}
    </div>
  );
};

export default Accordion;