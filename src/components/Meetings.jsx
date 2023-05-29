import React, { useRef } from "react";
import fraud from "../assets/img/meetings/fraud.webp";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const Meetings = () => {
  const meetings = [
    {
      img: fraud,
      alt: "alt text for image",
      title: "Scams",
      text: "On this session we found out about some really useful ways to report scams.  This info has been helpfully passed on by Angela who attended Ferry Chats last week.  At the session, we were surprised that few people knew these ways of reporting scams. Thanks Angela",
      links: [
        {
          linkText: "Trading Standards in Scotland",
          linkURL: "https://www.consumeradvice.scot",
        },
        {
          linkText: "Citizens Advice Scotland",
          linkURL: "https://www.cas.org.uk",
        },
        {
          linkText: "The National Cyber Security Centre",
          linkURL:
            "https://www.ncsc.gov.uk/section/information-for/individuals-families",
        },
        {
          linkText: "Friends Against Scams",
          linkURL: "https://www.friendsagainstscams.org.uk/elearning/Dundee",
        },
        {
          linkText: "Stop Scams: Call 159",
          linkURL: "https://stopscamsuk.org.uk/159",
        },
      ],
      meetingDate: "2023-05-16",
    },

    {
      img: fraud,
      alt: "alt text for image",
      title: "Scams",
      text: "On this session we found out about some really useful ways to report scams.  This info has been helpfully passed on by Angela who attended Ferry Chats last week.  At the session, we were surprised that few people knew these ways of reporting scams. Thanks Angela",
      links: [
        {
          linkText: "Trading Standards in Scotland",
          linkURL: "https://www.consumeradvice.scot",
        },
        {
          linkText: "Citizens Advice Scotland",
          linkURL: "https://www.cas.org.uk",
        },
        {
          linkText: "The National Cyber Security Centre",
          linkURL:
            "https://www.ncsc.gov.uk/section/information-for/individuals-families",
        },
        {
          linkText: "Friends Against Scams",
          linkURL: "https://www.friendsagainstscams.org.uk/elearning/Dundee",
        },
        {
          linkText: "Stop Scams: Call 159",
          linkURL: "https://stopscamsuk.org.uk/159",
        },
      ],
      meetingDate: "2023-05-16",
    },

    {
      img: fraud,
      alt: "alt text for image",
      title: "Scams",
      text: "On this session we found out about some really useful ways to report scams.  This info has been helpfully passed on by Angela who attended Ferry Chats last week.  At the session, we were surprised that few people knew these ways of reporting scams. Thanks Angela",
      links: [
        {
          linkText: "Trading Standards in Scotland",
          linkURL: "https://www.consumeradvice.scot",
        },
        {
          linkText: "Citizens Advice Scotland",
          linkURL: "https://www.cas.org.uk",
        },
        {
          linkText: "The National Cyber Security Centre",
          linkURL:
            "https://www.ncsc.gov.uk/section/information-for/individuals-families",
        },
        {
          linkText: "Friends Against Scams",
          linkURL: "https://www.friendsagainstscams.org.uk/elearning/Dundee",
        },
        {
          linkText: "Stop Scams: Call 159",
          linkURL: "https://stopscamsuk.org.uk/159",
        },
      ],
      meetingDate: "2023-05-16",
    },

    {
      img: fraud,
      alt: "alt text for image",
      title: "Scams",
      text: "On this session we found out about some really useful ways to report scams.  This info has been helpfully passed on by Angela who attended Ferry Chats last week.  At the session, we were surprised that few people knew these ways of reporting scams. Thanks Angela",
      links: [
        {
          linkText: "Trading Standards in Scotland",
          linkURL: "https://www.consumeradvice.scot",
        },
        {
          linkText: "Citizens Advice Scotland",
          linkURL: "https://www.cas.org.uk",
        },
        {
          linkText: "The National Cyber Security Centre",
          linkURL:
            "https://www.ncsc.gov.uk/section/information-for/individuals-families",
        },
        {
          linkText: "Friends Against Scams",
          linkURL: "https://www.friendsagainstscams.org.uk/elearning/Dundee",
        },
        {
          linkText: "Stop Scams: Call 159",
          linkURL: "https://stopscamsuk.org.uk/159",
        },
      ],
      meetingDate: "2023-05-16",
    },

    {
      img: fraud,
      alt: "alt text for image",
      title: "Scams",
      text: "On this session we found out about some really useful ways to report scams.  This info has been helpfully passed on by Angela who attended Ferry Chats last week.  At the session, we were surprised that few people knew these ways of reporting scams. Thanks Angela",
      links: [
        {
          linkText: "Trading Standards in Scotland",
          linkURL: "https://www.consumeradvice.scot",
        },
        {
          linkText: "Citizens Advice Scotland",
          linkURL: "https://www.cas.org.uk",
        },
        {
          linkText: "The National Cyber Security Centre",
          linkURL:
            "https://www.ncsc.gov.uk/section/information-for/individuals-families",
        },
        {
          linkText: "Friends Against Scams",
          linkURL: "https://www.friendsagainstscams.org.uk/elearning/Dundee",
        },
        {
          linkText: "Stop Scams: Call 159",
          linkURL: "https://stopscamsuk.org.uk/159",
        },
      ],
      meetingDate: "2023-05-16",
    },
  ];
  const carousel = useRef();
  const swipe = (ev) => {
    const swipeDirection =
      (ev.target.dataset.direction ||
      ev.target.closest('span').dataset.direction);

    carousel.current.scroll({
      top: 0,
      left: (swipeDirection === 'left' ? -1000 : 1000),
      behavior: "smooth",
    })
console.log((swipeDirection === 'left' ? -550 : 550))
    
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
              <img src={meeting.img} alt={meeting.alt} loading="lazy" />
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
