import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

import Logo from "../../assets/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const signOut = () => {
    localStorage.clear();
  };

  const isLoggedIn = localStorage.getItem("type");

  return (
    <div>
      <nav className="bg-gray-800 shadow-lg">
        <div className="w-full mx-auto px-6 lg:px-24">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-between flex items-center">
              <Link to="/">
                <div className="flex-shrink-0">
                  <img className="h-8" src={Logo} alt="HyperBank" />
                </div>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/lending"
                    className="transition duration-400 ease-in-out text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Loans
                  </Link>
                  <Link
                    to="/advisory"
                    className="transition duration-400 ease-in-out text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Advisory
                  </Link>
                  <Link
                    to="/sme"
                    className="transition duration-400 ease-in-out text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    SMEs
                  </Link>
                  {isLoggedIn ? (
                    <Link
                      to="/"
                      onClick={signOut}
                      className="transition duration-400 ease-in-out text-gray-300 bg-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Sign Out
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="transition duration-400 ease-in-out text-gray-300 bg-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Sign In
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? <GiHamburgerMenu /> : <AiOutlineClose />}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/lending"
                  className="transition duration-400 ease-in-out text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Loans
                </Link>
                <Link
                  to="/advisory"
                  className="transition duration-400 ease-in-out text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Advisory
                </Link>
                <Link
                  to="/sme"
                  className="transition duration-400 ease-in-out text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  SMEs
                </Link>
                {isLoggedIn ? (
                  <Link
                    to="/"
                    onClick={signOut}
                    className="transition duration-400 ease-in-out text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Sign Out
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="transition duration-400 ease-in-out text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
