import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink
            to="/who-we-are"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
            who we are
          </NavLink>
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
          <NavLink
            to="/news"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
            news
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/get-involved"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "inactive"
            }>
            get involved
          </NavLink>
        </li>
      </ul>
      <NavLink to="/contact" className="btn primaryBtn">
        contact
      </NavLink>
    </nav>
  );
};
