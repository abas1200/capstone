import React from "react";
import logo from "../assets/logo.svg";
import { HEADER_MENU_ITEMS } from "../constatnts";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            {HEADER_MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
          <img className="logo" src={logo} />
        </div>
      </nav>
    </header>
  );
};
export default Header;
