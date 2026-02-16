import { useEffect, useRef } from "react";

export default function Navbar() {
  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        navRef.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinkRef.current.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent"
        );
      } else {
        navRef.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinkRef.current.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent"
        );
      }
    });

    // -------- light mode and dark mode -----------

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src="./assets/header-bg-color.png" alt="" className="w-full" />
        {/* <h1>Mihir Raval</h1> */}
      </div>

      <nav
        ref={navRef}
        className="w-full fixed top-0 left-0 px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between z-50"
      >
        {/* LEFT - Logo */}
        <div className="flex-1">
          <a href="#top">
            <h1 className="text-[#F87171] dark:text-[#F87171] text-2xl font-extrabold">
              Mihir.
            </h1>
          </a>
        </div>

        {/* CENTER - Desktop Menu */}
        <ul
          ref={navLinkRef}
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 
    items-center gap-8 rounded-full px-12 py-3
    bg-white shadow-sm bg-opacity-50 font-Ovo
    dark:border dark:border-white/30 dark:bg-transparent"
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        {/* RIGHT - Actions */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          {/* Theme Toggle */}
          <button onClick={toggleTheme}>
            <img src="./assets/moon_icon.png" className="w-5 dark:hidden" />
            <img
              src="./assets/sun_icon.png"
              className="w-5 hidden dark:block"
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-1.5 
      border border-gray-300 hover:bg-slate-100/70 
      dark:hover:bg-darkHover rounded-full font-Ovo 
      dark:border-white/30"
          >
            Contact
          </a>

          {/* Hamburger (ONLY MOBILE) */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <img
              src="./assets/menu-black.png"
              alt=""
              className="w-6 dark:hidden"
            />
            <img
              src="./assets/menu-white.png"
              alt=""
              className="w-6 hidden dark:block"
            />
          </button>
        </div>
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img
              src="./assets/close-black.png"
              alt=""
              className="w-5 cursor-pointer dark:hidden"
            />
            <img
              src="./assets/close-white.png"
              alt=""
              className="w-5 cursor-pointer hidden dark:block"
            />
          </div>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
