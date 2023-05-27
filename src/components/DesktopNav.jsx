import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.webp";
``
export const DesktopNav = () => {
  return (
    <nav className="desktop-nav">
      <NavHashLink to="/broughty_ferry_community/">
        <img src={logo} alt="Broughty Ferry Community Logo" />
      </NavHashLink>
      <ul>
        <li>
          <NavHashLink to="/broughty_ferry_community/#who-we-are">who we are</NavHashLink>
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
      <NavHashLink to="/broughty_ferry_community/#contact" className="btn primaryBtn">
        contact
      </NavHashLink>
    </nav>
  );
};
