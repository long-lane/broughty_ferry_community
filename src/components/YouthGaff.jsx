import React from "react";
import groveAcademy from "../assets/img/grove_academy.png";
export const YouthGaff = () => {
  return (
    <section className="youthGaff">
      <article>
        <h2>what we do</h2>
        <h3>youth gaff</h3>
        <p>
          Since early this year, we have been working with a range of pupils and
          staff from Grove Academy to design a Youth Survey that will find out
          what young people in our local community want to do in their
          community. They are also keen to find out about their experiences of
          coming out of COVID and their general well being.
        </p>
        <p>
          Broughty Ferry Community group will be working with the pupil to share
          the results in the community and to raiseawareness of the need of a
          'place to go'. We are working with the pupils in the Youth Action
          GRoup and will be forming a campagin to secure youth work services in
          the community.
        </p>
      </article>
      <article>
        <img src={groveAcademy} alt="Grove Academy" />
      </article>
    </section>
  );
};
