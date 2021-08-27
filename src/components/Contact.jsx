import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <section className="contact">
      <div className="contact--top">
        <h1>Find Us</h1>
      </div>
      <div className="contact--bottom">
        <div className="left--side">
          <h2>Empire State Building</h2>
          <h3>
            <address>
              <a href="https://maps.google.com/?ll=40.74845171782012, -73.98556392484304">
                20 W 34th St, New York, NY 10001, USA
              </a>
            </address>
          </h3>
          <h3>
            <a href="tel:+1 212-736-3100">+1 212-736-3100</a>
          </h3>
        </div>
        <div className="right--side">
          <button className="btn-cta">E-Mail</button>
          <button className="btn-cta">Chat</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
