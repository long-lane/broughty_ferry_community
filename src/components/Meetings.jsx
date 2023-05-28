import React from "react";

export const Meetings = ({ meetings }) => {
  return (
    <section className="meetings">
      <h3>meetings</h3>
      <p>What we've been chatting about</p>
      <div>
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
                        {console.log(`${meeting.meetingDate}-link-${index}`)}
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
      </div>
    </section>
  );
};
