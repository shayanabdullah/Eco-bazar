import { useState, useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ProductGallery({ images = [], productName = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbTrackRef = useRef(null);

  const scrollThumbs = (direction) => {
    if (!thumbTrackRef.current) return;
    const amount = 90;
    thumbTrackRef.current.scrollBy({
      top: direction === "up" ? -amount : amount,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-5">
      {/* Vertical thumbnails - desktop */}
      <div className="hidden md:flex flex-col items-center gap-2 order-2 md:order-1">
        <button
          type="button"
          onClick={() => scrollThumbs("up")}
          className="text-gray-00 hover:text-gray-700 transition-colors"
          aria-label="Scroll thumbnails up"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        <div
          ref={thumbTrackRef}
          className="flex flex-col gap-3 max-h-[420px] overflow-y-auto scrollbar-none"
        >
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`w-16 h-16 shrink-0 rounded-md border bg-white overflow-hidden transition-all ${
                activeIndex === i
                  ? "border-2 border-[#00B712]"
                  : "border-gray-200  hover:border-gray-400"
              }`}
            >
              <img
                src={src}
                alt={`${productName} thumbnail ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollThumbs("down")}
          className="text-gray-900 hover:text-gray-700 transition-colors"
          aria-label="Scroll thumbnails down"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Main image */}
      <div className="order-1 md:order-2 flex-1 bg-white rounded-lg flex items-center justify-center min-h-[320px] md:min-h-[460px] p-6">
        <img
          src={images[activeIndex]}
          alt={productName}
          className="max-h-[420px] w-full object-contain"
        />
      </div>

      {/* Horizontal thumbnails - mobile */}
      <div className="flex md:hidden gap-3 overflow-x-auto order-3 pb-1">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`w-16 h-16 shrink-0 rounded-md border bg-white overflow-hidden transition-all ${
              activeIndex === i
                ? "border-2 border-[#00B712]"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <img
              src={src}
              alt={`${productName} thumbnail ${i + 1}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
