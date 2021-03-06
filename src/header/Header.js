import React from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
      <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <Link to="/">
            <svg
                className="w-8 h-8 mr-2 fill-current"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <NavLink
              to="/"
              className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
              activeClassName="active" exact
            >
              Home
            </NavLink>
            <NavLink
              to="/addproduct"
              className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
              activeClassName="active"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block mt-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
              activeClassName="active"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
      <h1 className="my-3 text-4xl text-center">My Shop</h1>
      </>
    );
  }
}

export default Header;
