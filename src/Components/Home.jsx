import React from 'react';
import logo from '../assets/logo.png';
import art from '../assets/art.png';
import '../styles/Home.css';
import contact from '../assets/contact.png';

export default function Home() {
  return (
    <div className="home">
      <div className="main">
        <div className="par">
          <p>
            Well done mama description, done mama description, done mama
            description, done mama description, done mama description, done mama
            description, done mama description,{' '}
          </p>
        </div>
        <img src={art} alt="art" className="wdm-art" />
      </div>
      <form id="form" method="post">
        <div className="bg">
          <img src={contact} alt="contact" className="wdm-contact" />
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
    </div>
  );
}
