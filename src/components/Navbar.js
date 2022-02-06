import React, { useState } from "react";
import { IAuthor, IFavoouriteAuthor, IMenuClose, IMenuOpen } from "../SVGIcons";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <header className="bg-gray-800 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
        <NavLink to="/" className="block p-4 text-white font-bold whitespace-nowrap truncate">
          AuthorBook
        </NavLink>

        <label for="menu-open" id="mobile-menu-button" className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md" onClick={() => setChecked(!checked)}>
          <IMenuOpen checked={checked}></IMenuOpen>
          <IMenuClose checked={checked}></IMenuClose>
        </label>
      </header>
      <aside
        id="sidebar"
        className={`bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0  inset-y-0 left-0 transform md:relative md:translate-x-0 absolute transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto  ${
          checked ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
          <NavLink to="/" className="text-white flex items-center space-x-2 px-4" title="Your App is cool">
            <span className="text-2xl font-extrabold whitespace-nowrap truncate">AuthorBook</span>
          </NavLink>

          <nav data-dev-hint="main navigation">
            <NavLink to="/authors" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
              <IAuthor></IAuthor>
              <span>Authors</span>
            </NavLink>
            <NavLink to="/favorite-authors" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
              <IFavoouriteAuthor></IFavoouriteAuthor>
              <span>Favorite Authors</span>
            </NavLink>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
