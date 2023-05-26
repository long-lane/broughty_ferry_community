import React from "react";
import { NavHashLink } from "react-router-hash-link";
import logo from "../assets/img/logo.webp";

export const DesktopNav = () => {
  return (
    <nav className='desktopNav'>
      <NavHashLink to="/">
        <img src={logo} alt="Broughty Ferry Community Logo" />
      </NavHashLink>
      <ul>
        <li>
          <NavHashLink to="/who-we-are" activeClassName="active">
            who we are
          </NavHashLink>
        </li>
        <li>
          <details>
            <summary>what we do</summary>
            <ul>
              <li>
                <NavHashLink
                  to="/what-we-do"
                  activeClassName="active">
                  ferry chats
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/what-we-do"
                  activeClassName="active">
                  youth gaff
                </NavHashLink>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <NavHashLink to="/news" activeClassName="active">
            news
          </NavHashLink>
        </li>

        <li>
          <NavHashLink to="/get-involved#get-involved" activeClassName="active">
            get involved
          </NavHashLink>
        </li>
      </ul>
      <NavHashLink to="/#contact" className="btn primaryBtn">
        contact
      </NavHashLink>
    </nav>
  );
};
