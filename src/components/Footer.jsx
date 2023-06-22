import React from "react";
import { BsFacebook, BsEnvelopeFill } from "react-icons/bs";

export const Footer = () => {
  const submitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
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
                <BsEnvelopeFill /> broughtyferrycommunity
                <wbr />
                @gmail.com
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
        <form onSubmit={submitForm}>
          <textarea
            name="message"
            rows={10}
            placeholder="Send us your feedback"></textarea>
          <button type="submit" className="btn secondaryBtn">
            Send
          </button>
        </form>
        <p>Kindly funded by Dundee City council's Common Good Fund.</p>
      </article>
    </>
  );
};
