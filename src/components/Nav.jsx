import React from "react";
import { NavLink } from "react-router-dom";
export const Nav = () => {
  return (
    <nav>
      <img src="" alt="Broughty Ferry Community Logo" />
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
                  to="/ferry-chats"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>
                  ferry chats
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/youth-gaff"
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
          {" "}
          <NavLink
            to="/news"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
            news
          </NavLink>
        </li>
        <li>
          <li>
            <NavLink
              to="/get-involved"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "inactive"
              }>
              get involved
            </NavLink>
          </li>
        </li>
      </ul>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "btn" : "btn"
        }>
        contact
      </NavLink>
    </nav>
  );
};
