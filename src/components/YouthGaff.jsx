import React from "react";
import youthGaff from "../assets/img/youth_gaff.png";
import { NavLink } from "react-router-dom";

export const YouthGaff = ({ props }) => {
  const { showBtn, fullDescription } = props;

  return (
    <section className="youth-gaff">
      <article>
        <img src={youthGaff} alt="" />
      </article>
      <article>
        <h3>youth gaff</h3>

        {fullDescription ? (
          <>
            {" "}
            <p>
              Since early this year, we have been working with a range of pupils
              and staff from Grove Academy to design a Youth Survey that will
              find out what young people in our local community want to do in
              their community. They are also keen to find out about their
              experiences of coming out of COVID and their general well being.
            </p>
            <p>
              Broughty Ferry Community group will be working with the pupils to
              share the results in the community and to raise awareness of the
              need of a 'place to go'. We are working with the pupils in the
              Youth Action Group and will be forming a campagin to secure youth
              work services in the community.
            </p>
          </>
        ) : (
          <p>
            We are working with the pupils at Grove Academy to share the results
            in the community and to raise awareness of the need of a 'place to
            go'
          </p>
        )}
        {showBtn ? (
          <NavLink
            className="btn secondaryBtn"
            to="/broughty_ferry_community/what-we-do/youth-gaff">
            find out more
          </NavLink>
        ) : (
          ""
        )}
      </article>
    </section>
  );
};
