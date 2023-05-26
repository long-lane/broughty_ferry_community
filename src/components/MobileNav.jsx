import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import {
  BsPeople,
  BsClipboard2Heart,
  BsNewspaper,
  BsHandThumbsUp,
  BsChatSquareHeart,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import { useReducer } from "react";
import { NavReducer } from "../reducers/Reducers";
export const MobileNav = () => {
  const [navStatus, dispatch] = useReducer(NavReducer, { navOpen: false });

  const toggleMenu = (ev) => {
    const payload = { navOpen: !navStatus.navOpen };
    const action = { type: "navDisplay", payload: payload };
    dispatch(action);
    console.log(navStatus);
  };
  return (
    <IconContext.Provider value={{ className: "nav-icons" }}>
      <nav
        className={
          navStatus.navOpen ? "mobile-nav-active" : "mobile-nav-inactive"
        }>
        <div>
          <NavHashLink
            to="/who-we-are"
            activeClassName="active"
            onClick={toggleMenu}>
            BF
          </NavHashLink>
          <span onClick={toggleMenu}>
            {navStatus.navOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </span>
        </div>

        <ul>
          <li>
            <BsPeople />
            <NavHashLink
              to="/who-we-are"
              activeClassName="active"
              onClick={toggleMenu}>
              who we are
            </NavHashLink>
          </li>
          <li>
            <details>
              <summary>
                <BsClipboard2Heart />
                <span>what we do</span>
              </summary>
              <ul>
                <li>
                  <NavHashLink
                    to="/what-we-do"
                    activeClassName="active"
                    onClick={toggleMenu}>
                    ferry chats
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink
                    to="/what-we-do"
                    activeClassName="active"
                    onClick={toggleMenu}>
                    youth gaff
                  </NavHashLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <BsNewspaper />
            <NavHashLink
              to="/news"
              activeClassName="active"
              onClick={toggleMenu}>
              news
            </NavHashLink>
          </li>

          <li>
            <BsHandThumbsUp />
            <NavHashLink
              to="/get-involved"
              activeClassName="active"
              onClick={toggleMenu}>
              get involved
            </NavHashLink>
          </li>
          <li>
            <BsChatSquareHeart />
            <NavHashLink
              to="/#contact"
              activeClassName="active"
              onClick={toggleMenu}>
              contact
            </NavHashLink>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
};
