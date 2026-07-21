import { useState } from "react";
import Accordion from "../common/Accordion";

const MIN = 50;
const MAX = 1500;

const PriceFilter = () => {
  const [range, setRange] = useState([50, 1500]);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), range[1] - 10);
    setRange([value, range[1]]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), range[0] + 10);
    setRange([range[0], value]);
  };

  const minPercent = ((range[0] - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((range[1] - MIN) / (MAX - MIN)) * 100;

  const thumbClasses =
    "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 " +
    "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 " +
    "[&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer " +
    "[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:transition-transform " +
    "[&::-webkit-slider-thumb]:hover:scale-110 " +
    "[&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full " +
    "[&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary " +
    "[&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto";

  return (
    <Accordion
      title="Price"
      fontWeight="medium"
      fontSize="text-xl"
      titleBorder="border-t border-gray-2/60"
    >
    <div className="">
        <div className="relative h-4 flex items-center">
        {/* base track */}
        <div className="absolute w-full h-[5px] rounded-full bg-[#E5E5E5]" />
        {/* active track */}
        <div
          className="absolute h-[5px] rounded-full bg-primary"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />

        <input
          type="range"
          min={MIN}
          max={MAX}
          step={10}
          value={range[0]}
          onChange={handleMinChange}
          className={`absolute w-full appearance-none bg-transparent pointer-events-none ${thumbClasses}`}
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={10}
          value={range[1]}
          onChange={handleMaxChange}
          className={`absolute w-full appearance-none bg-transparent pointer-events-none ${thumbClasses}`}
        />
      </div>

      <p className="mt-4 text-sm font-poppins text-[#4D4D4D]">
        Price:{" "}
        <span className="font-medium text-[#1A1A1A]">
          ${range[0].toLocaleString()} — ${range[1].toLocaleString()}
        </span>
      </p>
    </div>
    </Accordion>
  );
};

export default PriceFilter;
