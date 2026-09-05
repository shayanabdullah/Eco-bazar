import { useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { FiPhoneCall } from "react-icons/fi";
import {
  ChevronDown,
  CalendarDays,
  Crown,
  Gift,
  Heart,
  Leaf,
  PackagePlus,
  Percent,
  ShoppingBag,
  ShoppingBasket,
  Newspaper,
  Info,
  Mail,
  ShoppingCart,
  Star,
  Tag,
  TrendingUp,
  Users,
  Utensils,
  Wallet,
  Zap,
  HeartPulse,
  BadgeQuestionMark,
} from "lucide-react";
import Container from "../layouts/Container";
import CatagoryDropDown from "./CatagoryDropDown";
import { catagoriesMegaMenu } from "../../utils/catagoryData";
import { navMenus } from "../../data/menuData";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AnimatePresence, motion } from "motion/react";
import useClickOutside from "../../hooks/useClickOutside";

const menuIcons = {
  tag: Tag,
  zap: Zap,
  gift: Gift,
  calendar: CalendarDays,
  percent: Percent,
  "calendar-days": CalendarDays,
  "package-plus": PackagePlus,
  leaf: Leaf,
  sprout: Leaf,
  "shopping-basket": ShoppingBasket,
  "trending-up": TrendingUp,
  heart: Heart,
  star: Star,
  "shopping-cart": ShoppingCart,
  users: Users,
  "shopping-bag": ShoppingBag,
  utensils: Utensils,
  "heart-pulse": HeartPulse,
  wallet: Wallet,
  crown: Crown,
  newspaper: Newspaper,
  info: Info,
  mail: Mail,
  question: BadgeQuestionMark,
};

const Navbar = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const { pathname, search } = useLocation();
  const currentSort = new URLSearchParams(search).get("sort");
  const dropDownMenuRef = useRef(null);

  useClickOutside(
    dropDownMenuRef,
    () => setOpenMenu(false),
    "mousedown",
    openMenu,
  );

  const shopUrl = (sort) => `/shop?sort=${encodeURIComponent(sort)}`;

  return (
    <nav className="bg-gray-8">
      <Container>
        <div className="hidden lg:flex justify-between items-center w-full h-full relative">
          <div
            className="flex items-center gap-x-4 relative"
            ref={dropDownMenuRef}
          >
            <CatagoryDropDown
              categories={catagoriesMegaMenu}
              isOpen={categoriesOpen}
              onToggle={() => setCategoriesOpen((p) => !p)}
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            />
            <ul className="flex items-center gap-x-8">
              {navMenus.map((menu) => (
                <li
                  key={menu.id}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(menu.id)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMenu((current) =>
                        current === menu.id ? null : menu.id,
                      )
                    }
                    className={`flex items-center gap-1 font-poppins font-semibold text-sm transition-colors duration-300 text-white`}
                    aria-expanded={openMenu === menu.id}
                  >
                    {menu.label}
                    {menu.badge && (
                      <span className="rounded bg-warning px-1 text-[10px] text-white">
                        {menu.badge}
                      </span>
                    )}
                    <ChevronDown size={15} className={`transition-transform duration-300 transform ${openMenu === menu.id ? "rotate-180" : "rotate-0"}`} />
                  </button>
                      <motion.div
                      className={`absolute left-0 top-[calc(100%+12px)] z-50 w-56 transition-all duration-300 ${openMenu === menu.id ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
                   
                    >
                      {/* Invisible hover bridge */}
                      <div className="absolute -top-3 left-0 h-3 w-full" />

                      {/* Actual dropdown */}
                      <motion.div
                        className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-lg"
                      >
                        {menu.items.map((item) => {
                          const Icon = menuIcons[item.icon] || Tag;

                          const active = item.to
                            ? pathname === item.to
                            : pathname === "/shop" && currentSort === item.sort;

                          return (
                            <Link
                              key={item.id}
                              to={item.to || shopUrl(item.sort)}
                              onClick={() => setOpenMenu(null)}
                              className={`flex items-center gap-3 px-4 py-3 font-poppins text-sm text-gray-700 transition-colors hover:bg-green-50 hover:text-primary ${
                                active ? "bg-green-50 text-primary" : ""
                              }`}
                            >
                              <Icon size={17} />
                              {item.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    </motion.div>
                
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-x-2 font-poppins font-medium text-sm text-white cursor-pointer">
            <FiPhoneCall className="text-xl" />
            <Link to="tel:01998-422037">01998-422037</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
