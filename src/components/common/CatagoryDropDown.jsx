import { AnimatePresence, motion } from "motion/react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronDown } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import MegaMenuPanel from "./MegaMenuPanel.jsx";
import CategorySidebar from "../CategorySidebar.jsx";

const CatagoryDropDown = ({
  categories,
  isOpen,
  onToggle,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryHover = (category, index) => {
    if (index < categories.length - 1) {
      setActiveCategory(category);
    } else {
      setActiveCategory(null);
    }
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
    onMouseLeave?.();
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div
        className="relative flex items-center h-full"
        onMouseEnter={onMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="p-2.5 bg-primary cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <IoIosMenu className="text-4xl text-white" />
        </button>

        <div className="flex items-center justify-between pr-4 pl-6 bg-gray-9 cursor-pointer text-white py-4 min-h-full min-w-[250px] font-poppins font-medium text-sm select-none">
          <h2>All Categories</h2>
          <CgChevronDown
            className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <div className="absolute top-full left-0 flex z-[99]">
              {/* Category list */}
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="w-[250px] bg-white border border-gray-200 shadow-lg rounded-sm font-poppins text-sm text-gray-800"
              >
                {categories.map((category, index) => {
                  const isLast = index === categories.length - 1;
                  const isActive = activeCategory?.id === category.id;

                  return (
                    <div
                      key={category.id}
                      className={`
                      w-full py-3.5 px-5 flex items-center gap-x-3 cursor-pointer
                      transition-colors duration-200
                      ${isActive ? "text-primary bg-green-50" : "hover:text-primary"}
                      ${isLast ? "border-t border-gray-200" : ""}
                    `}
                      onMouseEnter={() => handleCategoryHover(category, index)}
                    >
                      <i
                        className={`text-[22px] transition-colors duration-200 ${isActive ? "text-primary" : "text-gray-400"}`}
                      >
                        {category.icon}
                      </i>
                      <p className="flex-1">{category.category}</p>
                      {!isLast && (
                        <HiOutlineChevronRight
                          className={`text-lg transition-colors duration-200 ${isActive ? "text-primary" : "text-gray-400"}`}
                        />
                      )}
                    </div>
                  );
                })}
              </motion.div>

              <AnimatePresence>
                {activeCategory && (
                  <MegaMenuPanel
                    key={activeCategory.id}
                    activeCategory={activeCategory}
                  />
                )}
              </AnimatePresence>
            </div>
          )}
        </AnimatePresence>
      </div>

      <CategorySidebar setIsOpen={setIsSidebarOpen} isOpen={isSidebarOpen} />
    </>
  );
};

export default CatagoryDropDown;
