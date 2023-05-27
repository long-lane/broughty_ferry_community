import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.webp";

export const DesktopNav = () => {
  return (
    <nav className="desktop-nav">
      <NavHashLink to="/">
        <img src={logo} alt="Broughty Ferry Community Logo" />
      </NavHashLink>
      <ul>
        <li>
          <NavHashLink to="/#who-we-are">who we are</NavHashLink>
        </li>
        <li>
          <details>
            <summary>what we do</summary>
            <ul>
              <li>
                <NavLink to="/what-we-do/ferry-chats">ferry chats</NavLink>
              </li>
              <li>
                <NavLink to="/what-we-do/youth-gaff">youth gaff</NavLink>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <NavLink to="/news">news</NavLink>
        </li>

        <li>
          <NavLink to="/get-involved">get involved</NavLink>
        </li>
      </ul>
      <NavHashLink to="/#contact" className="btn primaryBtn">
        contact
      </NavHashLink>
    </nav>
  );
};
