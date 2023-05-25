import React from "react";
import whoWeAre from "../assets/img/who_we_are.webp";

export const WhoWeAre = () => {
  return (
    <section className="whoWeAre">
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
      </article>
    </section>
  );
};
