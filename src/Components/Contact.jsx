import React from "react";
import contact from "../assets/contact.png";

export default function Contact() {
  return (
    <form id="form" method="post">
      <div className="bg">
        <div className="img">
          <img src={contact} alt="contact" className="wdm-contact" />
        </div>
        <div className="formgroup" id="name-form">
          <label htmlFor="name">Your name*</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="formgroup" id="email-form">
          <label htmlFor="email">Your e-mail*</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="formgroup" id="message-form">
          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message"></textarea>
        </div>{" "}
      </div>
    </form>
  );
}
