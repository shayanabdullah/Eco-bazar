import { NavLink } from "react-router";

const NAV_LINKS = [
  { label: "Home",       to: "/"        },
  { label: "Shop",       to: "/shop"    },
  { label: "Blog",       to: "/blog"    },
  { label: "About Us",   to: "/about"   },
  { label: "Contact Us", to: "/contact" },
];

const NavLinks = () => (
  <ul className="flex items-center gap-x-8">
    {NAV_LINKS.map(({ label, to }) => (
      <li key={to}>
        <NavLink
          to={to}
          style={({ isActive }) => ({
            color: isActive ? "white" : "#808080",
            textDecoration: "none",
          })}
        >
          <span className="font-poppins font-medium text-sm hover:text-white transition-colors duration-300">
            {label}
          </span>
        </NavLink>
      </li>
    ))}
  </ul>
);

export default NavLinks;