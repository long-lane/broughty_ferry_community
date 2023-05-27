import React from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
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
  };
  return (
    <IconContext.Provider value={{ className: "nav-icons" }}>
      <nav
        className={
          navStatus.navOpen ? "mobile-nav-active" : "mobile-nav-inactive"
        }>
        <div>
          <HashLink
            to="/broughty_ferry_community/"
            activeClassName="active"></HashLink>
          <span onClick={toggleMenu}>
            {navStatus.navOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </span>
        </div>

        <ul>
          <li>
            <BsPeople />
            <HashLink
              to="/broughty_ferry_community/#who-we-are"
              activeClassName="active"
              onClick={toggleMenu}
              scroll=
              {(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}>
              
              who we are
            </HashLink>
          </li>
          <li>
            <details>
              <summary>
                <BsClipboard2Heart />
                <span>what we do</span>
              </summary>
              <ul>
                <li>
                  <NavLink
                    to="/broughty_ferry_community/what-we-do/ferry-chats"
                    onClick={toggleMenu}>
                    ferry chats
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/broughty_ferry_community/what-we-do/youth-gaff"
                    onClick={toggleMenu}>
                    youth gaff
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <BsNewspaper />
            <HashLink
              to="/broughty_ferry_community/news"
              activeClassName="active"
              onClick={toggleMenu}>
              news
            </HashLink>
          </li>

          <li>
            <BsHandThumbsUp />
            <HashLink
              to="/broughty_ferry_community/get-involved"
              activeClassName="active"
              onClick={toggleMenu}>
              get involved
            </HashLink>
          </li>
          <li>
            <BsChatSquareHeart />
            <HashLink
              to="/broughty_ferry_community/#contact"
              onClick={toggleMenu}>
              contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
};
