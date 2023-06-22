import React from "react";
import hero from "../assets/img/hero.png";
import { NavLink } from "react-router-dom";
export const Hero = () => {
  return (
    <section className="hero">
      <article>
        <span>get involved</span>

        <h1>
          meet people, raise funds, and put back into your local community
        </h1>
        <p>
          we have opportunities for you to take part or volunteer within our
          projects and activities.
        </p>
        <NavLink className='btn primaryBtn' to="/broughty_ferry_community/get-involved">get involved</NavLink>

      </article>
      <article>
        <img src={hero} alt="" loading="lazy" />
      </article>
    </section>
  );
};
