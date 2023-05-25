import React from "react";
import { subscribe } from "../helpers/SubscriptionHandler";
import hero from '../assets/img/hero.png'
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
        <form
          className="subscription"
          onSubmit={(ev) => {
            subscribe(ev, "123456");
          }}>
          <input type="email" placeholder='Your email address'/>
          <input type="submit" value="Subscribe" />
        </form>
      </article>
      <article>
        <img src={hero} />
      </article>
    </section>
  );
};
