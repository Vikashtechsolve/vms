import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png"; 

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto h-12 flex items-center gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-40 h-40" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-md font-medium">
          <NavLink to="/join-us" className="hover:text-red-600">
            Join Us
          </NavLink>

          <NavLink to="/hire-from-us" className="hover:text-red-600">
            Hire from Us
          </NavLink>

          <NavLink to="/about-us" className="hover:text-red-600">
            About Us
          </NavLink>

          <NavLink to="/find-jobs" className="hover:text-red-600">
            Find Jobs
          </NavLink>

          <NavLink to="/contact-us" className="hover:text-red-600">
            Contact Us
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu */}
<div className="md:hidden px-4 pb-3">
  <div
    className="
      flex gap-3
      overflow-x-auto
      flex-nowrap
      scrollbar-hide
    "
  >
    <NavLink
      to="/"
      className="min-w-max px-4 py-1.5 rounded-full border border-black text-sm font-medium whitespace-nowrap"
    >
      Home
    </NavLink>

    <NavLink
      to="/join-us"
      className="min-w-max px-4 py-1.5 rounded-full border border-gray-300 text-sm text-gray-500 whitespace-nowrap"
    >
      Join Us
    </NavLink>

    <NavLink
      to="/hire-from-us"
      className="min-w-max px-4 py-1.5 rounded-full border border-gray-300 text-sm text-gray-500 whitespace-nowrap"
    >
      Hire from Us
    </NavLink>

    <NavLink
      to="/about-us"
      className="min-w-max px-4 py-1.5 rounded-full border border-gray-300 text-sm text-gray-500 whitespace-nowrap"
    >
      About Us
    </NavLink>

    <NavLink
      to="/find-jobs"
      className="min-w-max px-4 py-1.5 rounded-full border border-gray-300 text-sm text-gray-500 whitespace-nowrap"
    >
      Find Jobs
    </NavLink>

    <NavLink
      to="/contact-us"
      className="min-w-max px-4 py-1.5 rounded-full border border-gray-300 text-sm text-gray-500 whitespace-nowrap"
    >
      Contact Us
    </NavLink>
  </div>
</div>

    </header>
  );
};

export default Navbar;
