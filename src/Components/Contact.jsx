import React from 'react';
import contact from '../assets/contact.png';

export default function Contact() {
  return (
    <form id="form" method="post">
      <div className="par">
        <p>
          Well done Mama is the right cleaning lady to find your comfort after
          returning home after a long day at work. Contact me for any of your
          questions, I will be happy to find the solution to your problems.
        </p>
      </div>
      <div className="bg">
        <div class="img">
          <img src={contact} alt="contact" className="wdm-contact" />
        </div>
        <div class="formgroup" id="name-form">
          <label for="name">Your name*</label>
          <input type="text" id="name" name="name" />
        </div>
        <div class="formgroup" id="email-form">
          <label for="email">Your e-mail*</label>
          <input type="email" id="email" name="email" />
        </div>
        <div class="formgroup" id="message-form">
          <label for="message">Your message</label>
          <textarea id="message" name="message"></textarea>
        </div>{' '}
      </div>
    </form>
  );
}
