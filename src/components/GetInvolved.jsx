import React from "react";

export const GetInvolved = () => {
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
    <section className="get-involved" id="get-involved">
      <article>
        <h2>get involved</h2>
      </article>
      <article>
        <form onSubmit={submitForm}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" rows={10} placeholder="Say 'Hi' 🤗"></textarea>
          <button type="submit" className="btn secondaryBtn">Submit Form</button>
        </form>
      </article>
    </section>
  );
};
