import React from "react";
import { subscribe } from "../helpers/SubscriptionHandler";
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
          <input type="email" />
          <input type="submit" value="Subscribe" />
        </form>
      </article>
      <article>
        <img src="https://media.istockphoto.com/id/1472519495/photo/group-of-senior-friends-smiling-on-camera-after-yoga-lesson-at-city-park.jpg?s=1024x1024&w=is&k=20&c=VNVbkjtGxpm4N7EEnXnt9Q1nheoxORj6fppC02NIv5w=" />
      </article>
    </section>
  );
};
