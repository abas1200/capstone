import React from "react";
import logo from "../assets/logo.svg";
import { HEADER_MENU_ITEMS } from "../constatnts";

const Header = () => {
  return (
    <header>
      <img src={logo} />
      <nav>
      <ul>
        {HEADER_MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
    </header>
  );
};
export default Header;
