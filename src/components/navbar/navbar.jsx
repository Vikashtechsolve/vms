import { NavLink } from "react-router-dom";
import BrandLogo from "../BrandLogo.jsx";

const linkClass = ({ isActive }) =>
  `cursor-pointer hover:text-[#C1272D] transition-colors ${
    isActive ? "text-[#C1272D] font-semibold" : "text-gray-800"
  }`;

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[68px] sm:h-[72px] flex items-center justify-between gap-4">
        <BrandLogo variant="dark" showTagline />

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[15px] font-medium">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/join-us" className={linkClass}>
            Join Us
          </NavLink>
          <NavLink to="/hire-from-us" className={linkClass}>
            Hire from Us
          </NavLink>
          <NavLink to="/about-us" className={linkClass}>
            About Us
          </NavLink>
          <NavLink to="/find-jobs" className={linkClass}>
            Find Jobs
          </NavLink>
          <NavLink to="/contact-us" className={linkClass}>
            Contact Us
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden px-4 pb-3 border-t border-gray-100">
        <div className="flex gap-3 overflow-x-auto flex-nowrap scrollbar-hide pt-2">
          {[
            ["/", "Home"],
            ["/join-us", "Join Us"],
            ["/hire-from-us", "Hire from Us"],
            ["/about-us", "About Us"],
            ["/find-jobs", "Find Jobs"],
            ["/contact-us", "Contact Us"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `cursor-pointer min-w-max px-4 py-1.5 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "border-[#B11C20] text-[#B11C20] bg-red-50"
                    : "border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
