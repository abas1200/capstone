import React from "react";
import logo from "../assets/logo.svg";
import { HEADER_MENU_ITEMS } from "../constatnts";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} />
      <nav>
      <ul>
        {HEADER_MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <NavLink to={item.url}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
    </header>
  );
};
export default Header;
