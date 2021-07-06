import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";

function Header() {
  const [top, setTop] = useState(true);
  const [openDropdown, setopenDropdown] = useState(false);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 transition duration-300 ease-in-out ${
        !top
          ? "bg-white blur shadow-lg"
          : "bg-gradient-to-r from-blue-150 to-blue-650"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0">
            <Link to="/" className="block" aria-label="Cruip">
              {top ? (
                <img
                  src={require("../images/logo_white@2x.png").default}
                  width="150px"
                  alt="brand"
                />
              ) : (
                <img
                  src={require("../images/logo_02@2x.png").default}
                  width="150px"
                  alt="brand"
                />
              )}
            </Link>
          </div>
          <div className="hidden lg:flex justify-between w-full ">

            {/* Site navigation */}
            <div className="flex flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    to="/"
                    className={`font-medium ${
                      top ? "text-white" : "text-gray-600"
                    } hover:font-extrabold px-5 py-3 flex items-center transition duration-150 ease-in-out`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={`font-medium ${
                      top ? "text-white" : "text-gray-600"
                    } hover:font-extrabold px-5 py-3 flex items-center transition duration-150 ease-in-out`}
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hire me Button*/}
            <div className="flex flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    to="/"
                    className={`btn-sm border-0 ${
                      top
                        ? "text-blue-800 bg-white"
                        : "text-white bg-gradient-to-r from-blue-150 to-blue-650"
                    }`}
                  >
                    <span>Hire me</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Nav Button */}
          <div className="-mr-2 flex block lg:hidden">
            <button
              type="button"
              onClick={() => setopenDropdown(!openDropdown)}
              className={`inline-flex items-center justify-center p-2 border-2 rounded-md  focus:outline-none ${
                top
                  ? "hover:text-white text-white border-white"
                  : "hover:text-gray-500 text-gray-500 border-gray-500"
              } `}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          {/* Nav Button Click Open Window */}
          {openDropdown ? (
            <div
              className="shadow-xl transition ease-in-out duration-700 absolute w-full flex justify-center top-16 left-0 bg-white"
              id="mobile-menu"
            >
              <FadeIn>
                <div className="px-2 pt-2 pb-3 my-8 space-y-1 sm:px-3 ">
                  <ul className="flex flex-col items-center">
                    <li>
                      <Link
                        to="/"
                        className="font-medium hover:font-extrabold px-5 py-2 flex items-center transition duration-150 ease-in-out"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="font-medium  hover:font-extrabold px-5 py-2 flex items-center transition duration-150 ease-in-out"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="btn-sm mt-10 px-20 border-0 text-white bg-gradient-to-r from-blue-150 to-blue-650"
                      >
                        <span>Hire me</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
