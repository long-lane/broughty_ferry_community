import React, { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { meetings } from "../data/meetings";
export const Meetings = () => {
  const carousel = useRef();
  const swipe = (ev) => {
    const swipeDirection =
      ev.target.dataset.direction ||
      ev.target.closest("span").dataset.direction;

    carousel.current.scroll({
      top: 0,
      left: swipeDirection === "left" ? -1000 : 1000,
      behavior: "smooth",
    });
  };
  return (
    <section className="meetings">
      <h3>meetings</h3>
      <p>What we've been chatting about</p>
      <div ref={carousel}>
        <span onClick={swipe} data-direction="left">
          <AiOutlineArrowLeft />
        </span>
        {meetings.map((meeting) => {
          return (
            <article key={meeting.meetingDate}>
              <h4>{meeting.title}</h4>
              <time dateTime={meeting.meetingDate}>
                {" "}
                {meeting.meetingDate}{" "}
              </time>
              <p>{meeting.text}</p>

              {meeting.links ? (
                <>
                  <h5>useful links</h5>
                  <ul>
                    {meeting.links.map((link, index) => {
                      return (
                        <li key={`${meeting.meetingDate}-${index}`}>
                          <a
                            href={link.linkURL}
                            target="__blank"
                            rel="noopener noreferrer">
                            {link.linkText}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                ""
              )}
            </article>
          );
        })}
        <span onClick={swipe} data-direction="right">
          <AiOutlineArrowRight />
        </span>
      </div>
    </section>
  );
};
