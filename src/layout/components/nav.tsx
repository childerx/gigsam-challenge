import { Link, Outlet, useLocation } from "react-location";
import React, { useState, Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import logo from "@/assets/images/vercel.png";
import { navItems } from "@/constants/data";

const Navbar = () => {
  // Mobile menu open/close
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Which dropdown is open on desktop (hover-based)
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
    null
  );

  // Which dropdown is open on mobile (click-based)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  const currentPath = useLocation().current.pathname;

  // Track if user has scrolled away from the top
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop hover handlers
  const handleMouseEnter = (label: string) => {
    setOpenDesktopDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDesktopDropdown(null);
  };

  // Mobile toggle handlers
  const handleMobileDropdownToggle = (label: string) => {
    setOpenMobileDropdown((prev) => (prev === label ? null : label));
  };
  return (
    <nav
      className={`bg-black text-white sticky top-0 w-full z-50 
              transition-all duration-150 ease-in-out
              ${isScrolled ? "border-b border-[var(--border)]" : "border-b-0"}
            `}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-14">
        {/* Top bar */}
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img className="h-5 w-auto" src={logo} alt="Vercel Logo" />
              <p className="font-bold text-xl">Vercel</p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center ">
              {navItems.map((item) => {
                const hasSubItems = !!item.subItems?.length;
                return (
                  <div
                    key={item.label}
                    onMouseEnter={() =>
                      hasSubItems && handleMouseEnter(item.label)
                    }
                    onMouseLeave={() => hasSubItems && handleMouseLeave()}
                  >
                    {hasSubItems ? (
                      <>
                        {/* Parent button with arrow */}
                        <button
                          className="inline-flex items-center space-x-1 font-medium hover:bg-gray-700 hover:bg-opacity-30
                               px-5 py-1.5 rounded-full hover:text-gray-200 transition"
                        >
                          <span className="font-light text-gray-400 text-sm ">
                            {item.label}
                          </span>
                          <svg
                            className={`h-4 w-4 transition-transform duration-200 ${
                              openDesktopDropdown === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {/* Dropdown Menu with Transition */}
                        <Transition
                          as={Fragment}
                          show={openDesktopDropdown === item.label}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1 scale-95"
                          enterTo="opacity-100 translate-y-0 scale-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0 scale-100"
                          leaveTo="opacity-0 translate-y-1 scale-95"
                        >
                          <div
                            className="absolute left-20 top-14 mt-2 bg-black border border-[var(--border)] rounded-xl shadow-lg p-6 z-50 min-w-96 origin-top"
                          >
                            {/* Centered arrow pointer */}
                            <div className="absolute left-[13%] -top-2 w-4 h-4 transform translate-x-1/2 ">
                              <div className="w-4 h-4 bg-black border-t border-l border-[var(--border)] rotate-45" />
                            </div>
                            {/* Categories */}
                            <div className="flex gap-7">
                              {item.categories?.map((category) => (
                                <div key={category.label}>
                                  <p className="text-gray-400 font-light text-nowrap mb-6">
                                    {category.label}
                                  </p>
                                  {category.links.map((link) => (
                                    <Link
                                      key={link.title}
                                      to={link.href}
                                      className="group flex items-center mb-7 gap-4 text-gray-300 hover:text-white transition"
                                    >
                                      <div className="w-10 h-10 flex justify-center items-center border-[0.5px] group-hover:bg-white border-gray-600 rounded transition-all duration-150 ease-in-out">
                                        <link.icon
                                          aria-hidden="true"
                                          className="group-hover:text-black transition-all duration-150 ease-in-out"
                                        />
                                      </div>
                                      <div>
                                        <p className="">{link.title}</p>
                                        <p className="font-light text-sm text-gray-500 text-nowrap">
                                          {link.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        </Transition>
                      </>
                    ) : (
                      // No subItems => normal link
                      <a
                        href={item.href}
                        className="font-light text-gray-400 text-sm hover:bg-gray-700 hover:bg-opacity-30
                               px-5 py-1.5 rounded-full hover:text-gray-200 transition"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="hover:text-gray-300 transition text-sm border-[0.5px] border-gray-700 py-2 px-5 rounded-lg bg-[#111]"
            >
              Log In
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition text-sm font-medium border-[0.5px] border-gray-700 py-2 px-5 rounded-lg bg-[#111]"
            >
              Contact
            </a>
            <a
              href="#"
              className="bg-white text-black text-sm px-5 py-2 rounded-md font-medium 
                         hover:bg-gray-200 transition"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-gray-200 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Transition */}
      <Transition
        as={Fragment}
        show={mobileMenuOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div className="md:hidden border-t border-gray-800 bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Map top-level items */}
            {navItems.map((item) => {
              const hasSubItems = !!item.subItems?.length;
              return (
                <div key={item.label} className="flex flex-col">
                  {hasSubItems ? (
                    <>
                      <button
                        onClick={() => handleMobileDropdownToggle(item.label)}
                        className="w-full flex items-center justify-between px-3 py-2 text-left 
                                   font-medium text-gray-200 hover:text-white 
                                   focus:outline-none transition"
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`h-4 w-4 transform transition ${
                            openMobileDropdown === item.label
                              ? "rotate-180"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <Transition
                        as={Fragment}
                        show={openMobileDropdown === item.label}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-screen"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 max-h-screen"
                        leaveTo="opacity-0 max-h-0"
                      >
                        <div className="overflow-hidden ml-4 border-l border-gray-800">
                          {item.subItems?.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="block px-3 py-1 text-sm text-gray-300 hover:text-white transition"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </Transition>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 font-medium text-gray-200 hover:text-white transition"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              );
            })}

            {/* Divider */}
            <hr className="border-gray-800 my-2" />

            {/* Right side links (mobile) */}
            <div className="px-3 space-y-1">
              <a
                href="#"
                className="block font-medium text-gray-200 hover:text-white transition"
              >
                Log In
              </a>
              <a
                href="#"
                className="block font-medium text-gray-200 hover:text-white transition"
              >
                Contact
              </a>
              <a
                href="#"
                className="block bg-white text-black px-4 py-2 rounded-md font-medium 
                           hover:bg-gray-200 transition"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
