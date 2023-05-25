import React from "react";

export const subscribe = async (ev, apiKey) => {
  ev.preventDefault();
  const formData = new FormData(ev.target);

  formData.append("access_key", apiKey);

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  // const res = await fetch("https://api.web3forms.com/submit", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: json,
  // }).then((res) => res.json());

  if (res.success) {
    console.log("Success", res);
  }
};
