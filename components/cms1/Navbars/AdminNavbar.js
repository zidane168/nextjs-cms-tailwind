import React from "react";

import UserDropdown from "../Dropdowns/UserDropdown.js";
import Link from "next/link";

import useTrans from '../../../pages/hooks/useTrans'
 

export default function Navbar() {

  const { language, asPath, locale }  = useTrans() // asPath is current URL, 
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            { language.home.title  }
          </a>
          {/* Form */}
          {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form> */}

          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3 space-x-2">
            <div>
              { language.home.content }
            </div>

            <div className="text-white">
              <Link
                active = { locale === "zho" }
                className="active:bg-orange-100  relative flex w-full flex-wrap items-stretch"
                href={ asPath }  locale="zho" 
              >
                中文 🇭🇰
              </Link>
            </div>

            <div className="text-white">
              <Link
               active = { locale === "en" }
                className="active:bg-orange-100 relative flex w-full flex-wrap items-stretch"
                href={ asPath }  locale="en"
              >
                English 🇺🇸
              </Link>
            </div>
          </div>

          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
