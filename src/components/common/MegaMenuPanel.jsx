import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";

const MegaMenuPanel = ({ activeCategory }) => {
  if (!activeCategory) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute top-0 left-full min-w-[860px] max-w-[1200px] bg-white py-10 pl-8 pr-5 border border-gray-200 shadow-xl rounded-r-lg rounded-bl-lg z-[100]"
    >
      <div className="flex gap-6">
        {/* Sub-categories + Popular Items */}
        <div className="grid grid-cols-2 gap-6 w-[70%]">
          {/* Sub-categories */}
          <div className="border-r border-gray-200 pr-6 min-w-[180px]">
            <h2 className="font-poppins font-semibold text-base text-primary pb-4">
              {activeCategory.category}
            </h2>
            <div className="flex flex-col gap-y-3">
              {activeCategory.subCategories.map((item, i) => (
                <p
                  key={i}
                  className="font-poppins text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors duration-200"
                >
                  {item}
                </p>
              ))}
              <p className="font-poppins font-medium text-primary flex items-center gap-x-2 cursor-pointer hover:underline mt-4 text-sm">
                View All {activeCategory.category} <FaArrowRight />
              </p>
            </div>
          </div>

          {/* Popular Items */}
          <div className="pl-2">
            <h2 className="font-poppins font-semibold text-base text-primary pb-4 capitalize">
              Popular Items
            </h2>
            <div className="flex flex-col gap-y-3">
              {activeCategory.popularItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-x-4 pb-3 border-b border-gray-100 cursor-pointer group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                  <div>
                    <p className="font-poppins font-medium text-sm text-gray-700 pb-1 group-hover:text-primary transition-colors">
                      {item.name}
                    </p>
                    <p className="font-poppins font-semibold text-sm text-gray-900">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
              <p className="font-poppins font-medium text-primary text-sm flex items-center gap-x-2 cursor-pointer hover:underline mt-1">
                View All <FaArrowRight />
              </p>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="w-[30%] overflow-hidden rounded-lg group">
          <img
            src={activeCategory.banner.image}
            alt={activeCategory.banner.title}
            fetchPriority="high"
            loading="lazy"
            className="w-full min-h-[400px] object-cover group-hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenuPanel;