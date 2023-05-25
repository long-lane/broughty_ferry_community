import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import logo from "../assets/img/logo.webp";
export const Nav = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        <img src={logo} alt="Broughty Ferry Community Logo" />
      </NavLink>

      <ul>
        <li>
        <NavHashLink to="/who-we-are#who-we-are" activeClassName="active">
            who we are
          </NavHashLink>
        </li>
        <li>
          <details>
            <summary>what we do</summary>
            <ul>
              <li>
                <NavLink
                  to="/what-we-do/ferry-chats"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>
                  ferry chats
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/what-we-do/youth-gaff"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "inactive"
                  }>
                  youth gaff
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
        <li>
        <NavHashLink to="/news#news" activeClassName="active">
            news
          </NavHashLink>
        </li>

        <li>
          <NavHashLink to="/get-involved#get-involved" activeClassName="active">
            get involved
          </NavHashLink>
        </li>
      </ul>
      <NavLink to="/contact" className="btn primaryBtn">
        contact
      </NavLink>
    </nav>
  );
};
