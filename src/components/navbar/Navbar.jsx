import React, { useEffect, useState } from "react";
import { navLinks } from "../../assets/index";
import { RiMoonClearLine } from "react-icons/ri";
import { IoSunnyOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [thememode, setthemeMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (thememode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [thememode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white py-4 shadow-md dark:bg-black"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          <a
            href="#"
            className={`text-2xl font-bold transition md:text-4xl ${
              scrolled ? "text-black dark:text-white" : "text-white"
            }`}
          >
            Kerri
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ id, title, link, delay }) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
              >
                {/* <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className={`cursor-pointer capitalize transition ${
                    scrolled ? "text-black dark:text-white" : "text-white"
                  }`}
                >
                  {title}
                </Link> */}
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-primary "
                  className={`cursor-pointer capitalize transition ${
                    scrolled ? "text-black dark:text-white" : "text-white"
                  }`}
                >
                  {title}
                </Link>
              </motion.li>
            ))}

            <li
              className={`cursor-pointer transition ${
                scrolled ? "text-black dark:text-white" : "text-white"
              }`}
              onClick={() => setthemeMode(!thememode)}
            >
              {thememode ? <IoSunnyOutline /> : <RiMoonClearLine />}
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <span
              className={`cursor-pointer transition ${
                scrolled ? "text-black dark:text-white" : "text-white"
              }`}
              onClick={() => setthemeMode(!thememode)}
            >
              {thememode ? <IoSunnyOutline /> : <RiMoonClearLine />}
            </span>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-1"
            >
              <span
                className={`h-0.5 w-6 dark:bg-white ${scrolled ? "bg-darkblack" : "bg-white"}`}
              ></span>
              <span
                className={`h-0.5 w-6 dark:bg-white ${scrolled ? "bg-darkblack" : "bg-white"}`}
              ></span>
              <span
                className={`h-0.5 w-6 dark:bg-white ${scrolled ? "bg-darkblack" : "bg-white"}`}
              ></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 z-50 h-full w-3/4 bg-white p-6 shadow-lg dark:bg-black"
          >
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-black dark:text-white">
                Menu
              </h2>

              <button onClick={() => setMenuOpen(false)}>
                <IoClose className="text-2xl text-black dark:text-white" />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              {navLinks.map(({ id, title, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer text-lg text-black dark:text-white"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
