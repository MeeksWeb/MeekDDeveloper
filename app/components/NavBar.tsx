import { useState } from "react";
import { motion } from "motion/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const base = " transition hover:text-brand-600";
  const active = "text-brand-600 font-semibold";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-charcoal-800/80 bg-charcoal-950/80 backdrop-blur-md"
    >
      <div className="max-w-8xl mx-auto flex h-16 items-center justify-between px-4 md:px-20">
        <NavLink
          to="/"
          className="font-display text-brand-600 font-bold text-lg  "
        >
          <h1>MeekDDeveloper</h1>
        </NavLink>

        {/* DESKTOP VIEW */}
        <div className="space-x-6 hidden md:flex items-center  ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : base)}
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? active : base)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? active : base)}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? active : base)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? active : base)}
          >
            Contact
          </NavLink>
        </div>

        <div className="flex md:hidden items-center ">
          <button
            className="text-brand-500 font-bold text-xl "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE VIEW */}
      {menuOpen && (
        <div className="md:hidden border-t border-charcoal-800/80 bg-charcoal-950/80 backdrop-blur-md px-6 py-4 space-x-4 text-center ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </motion.nav>
  );
};

export default NavBar;
