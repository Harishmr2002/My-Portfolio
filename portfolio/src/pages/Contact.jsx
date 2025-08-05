import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">I'd love to hear from you!</p>

      {/* Contact Info */}
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:harishharshamr@gmail.com">harishharshamr@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+919123456789">+91 9632364513</a></p>
      </div>

      {/* Contact Form */}
      <form
        className="contact-form"
        action="https://formspree.io/f/mpwlyzde"  // Replace with your Formspree form URL
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
