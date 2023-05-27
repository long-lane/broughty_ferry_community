import React from "react";
import ferryChats from "../assets/img/ferry_chats.png";
import { HashLink } from "react-router-hash-link";
import { Meetings } from "./Meetings";

export const FerryChats = ({ props }) => {
  const { showBtn, showMap, showMeetings } = props;

  return (
    <>
      {showMeetings ? <Meetings /> : ""}
      <section className="ferry-chats">
        <article>
          <img src={ferryChats} alt="" />
        </article>
        <article id="ferryChats">
          <h3>ferry chats</h3>
          <p>
            Pop in and join our <b>Ferry Chats</b> sessions held on Tuesdays at
            <time dateTime="13:00:00"> 13:00</time> at the <b>YMCA</b> on
            <a
              href="https://goo.gl/maps/UU1C2e8EVMaJ731q8?coh=178572&entry=tt"
              target="__blank"
              rel="noopener noreferrer">
              151, Brook Street.
            </a>
          </p>
          <p>
            We chat about everything and anything! It's a great chance to meet
            new people in the community, have a cuppa, and a blether.
          </p>
          {showMap ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772.0493860330187!2d-2.8777048359785278!3d56.46761419866783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48865e9c0969fd79%3A0x50a6926e4d74a908!2s151%20Brook%20St%2C%20Broughty%20Ferry%2C%20Dundee%20DD5%201DJ!5e0!3m2!1sen!2suk!4v1685209795943!5m2!1sen!2suk"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          ) : (
            ""
          )}
          {showBtn ? (
            <HashLink
              className="btn secondaryBtn"
              to="/broughty_ferry_community/what-we-do/ferry-chats#meetings">
              see meetings
            </HashLink>
          ) : (
            ""
          )}
        </article>
      </section>
    </>
  );
};
