import React from "react";
import whoWeAre from "../assets/img/who_we_are.webp";
import { NavLink } from "react-router-dom";
export const WhoWeAre = () => {
  return (
    <section className="whoWeAre" id='who-we-are'>
      <article>
        <img src={whoWeAre} alt="" />
      </article>
      <article>
        <h2>who we are</h2>
        <p>
          We are a local group of volunteers who held a Community Meeting at the
          end of <time dateTime="2021">2021</time> to find out if the community
          had an interest in getting together to form a group or a charity. The
          answer was a resounding <i>'Yes!'</i>. We then formed a Steering Group
          then a Management Group. We are at the stage of applying for charity
          registration.
        </p>
        <NavLink className='btn secondaryBtn' to="/get-involved">get involved</NavLink>
      </article>
    </section>
  );
};
