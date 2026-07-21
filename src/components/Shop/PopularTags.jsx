import { useState } from "react";
import Accordion from "../common/Accordion";

const tags = [
  { id: 1, name: "Healthy" },
  { id: 2, name: "Low fat" },
  { id: 3, name: "Vegetarian" },
  { id: 4, name: "Kid foods" },
  { id: 5, name: "Vitamins" },
  { id: 6, name: "Bread" },
  { id: 7, name: "Meat" },
  { id: 8, name: "Snacks" },
  { id: 9, name: "Tiffin" },
  { id: 10, name: "Launch" },
  { id: 11, name: "Dinner" },
  { id: 12, name: "Breakfast" },
  { id: 13, name: "Fruit" },
];

const PopularTags = () => {
  const [selected, setSelected] = useState([2]); // "Low fat" active by default, matches reference

  const toggleTag = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  return (
    <Accordion title="Popular Tag" fontWeight="medium" fontSize="text-xl" titleBorder={'border-t border-gray-2/60'}>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isActive = selected.includes(tag.id);
          return (
            <button
              key={tag.id}
              type="button"
              onClick={() => toggleTag(tag.id)}
              className={`px-4 py-[7px] rounded-full text-xs font-poppins font-normal transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "bg-[#F2F2F2] text-[#4D4D4D] hover:bg-[#E5E5E5] hover:text-[#1A1A1A]"
              }`}
            >
              {tag.name}
            </button>
          );
        })}
      </div>
    </Accordion>
  );
};

export default PopularTags;
