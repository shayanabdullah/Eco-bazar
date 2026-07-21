import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Accordion from "../common/Accordion";

const ratings = [
  { id: 1, stars: 5, label: "5.0" },
  { id: 2, stars: 4, label: "4.0 & up" },
  { id: 3, stars: 3, label: "3.0 & up" },
  { id: 4, stars: 2, label: "2.0 & up" },
  { id: 5, stars: 1, label: "1.0 & up" },
];

const StarRow = ({ count }) => (
  <span className="flex items-center gap-[2px]">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        size={13}
        className={i < count ? "text-[#F5A623]" : "text-[#DADADA]"}
      />
    ))}
  </span>
);

const RatingFilter = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Accordion title="Rating" fontWeight="medium" fontSize="text-xl"  titleBorder={'border-t border-gray-2/60'}>
      <div className="flex flex-col gap-y-3">
        {ratings.map((item) => {
          const isChecked = selected === item.id;
          return (
            <label
              key={item.id}
              htmlFor={`rating-${item.id}`}
              className="flex items-center gap-x-3 cursor-pointer group"
              onClick={() => setSelected(item.id)}
            >
              <input
                type="checkbox"
                id={`rating-${item.id}`}
                checked={isChecked}
                readOnly
                className="peer"
                hidden
              />
              <span
                className={`w-4 h-4 shrink-0 rounded-[4px] border flex items-center justify-center transition-colors duration-200 ${
                  isChecked
                    ? "bg-primary border-primary"
                    : "border-[#CCCCCC] group-hover:border-primary"
                }`}
              >
                {isChecked && (
                  <svg
                    viewBox="0 0 12 12"
                    className="w-2.5 h-2.5 fill-none stroke-white stroke-[2]"
                  >
                    <path d="M2 6l2.5 2.5L10 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>

              <span className="flex items-center gap-x-2">
                <StarRow count={item.stars} />
                <span className="text-sm font-poppins text-[#4D4D4D] group-hover:text-[#1A1A1A] transition-colors">
                  {item.label}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </Accordion>
  );
};

export default RatingFilter;
