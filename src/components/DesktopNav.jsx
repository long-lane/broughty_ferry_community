import React from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.webp";
``
export const DesktopNav = () => {
  return (
    <nav className="desktop-nav">
      <NavLink to="/broughty_ferry_community/">
        <img src={logo} alt="Broughty Ferry Community Logo" />
      </NavLink>
      <ul>
        <li>
          <HashLink to="/broughty_ferry_community/#who-we-are">who we are</HashLink>
        </li>
        <li>
          <details>
            <summary>what we do</summary>
            <ul>
              <li>
                <NavLink to="/broughty_ferry_community/what-we-do/ferry-chats">ferry chats</NavLink>
              </li>
              <li>
                <NavLink to="/broughty_ferry_community/what-we-do/youth-gaff">youth gaff</NavLink>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <NavLink to="/broughty_ferry_community/news">news</NavLink>
        </li>

        <li>
          <NavLink to="/broughty_ferry_community/get-involved">get involved</NavLink>
        </li>
      </ul>
      <HashLink to="#contact" className="btn secondaryBtn">
        contact
      </HashLink>
    </nav>
  );
};
