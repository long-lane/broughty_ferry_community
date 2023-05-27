import React from "react";
import { BsFacebook, BsEnvelopeFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <article id="contact">
        <h2>contact</h2>
        <address>
          <ul>
            <li>
              <a
                href="mailto:broughtyferrycommunitycharity@gmail.com"
                rel="noopener noreferrer">
                <BsEnvelopeFill /> broughtyferrycommunity<wbr/>@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/bfccharity"
                target="__blank"
                rel="noopener noreferrer">
                <BsFacebook /> bfccharity
              </a>
            </li>
          </ul>
        </address>
      </article>
      <article></article>
      <article></article>
      <article>
        <p>Kindly funded by Dundee City council's Common Good Fund.</p>
      </article>
    </>
  );
};
