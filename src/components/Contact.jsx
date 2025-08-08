import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import './Contact.css';
export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p><Mail size={18} style={{ marginRight: '8px' }} /> 
            <a href="mailto:sanjivanishende9@gmail.com">sanjivanishende9@gmail.com</a>
          </p>
          <p><Linkedin size={18} style={{ marginRight: '8px' }} /> 
            <a href="https://linkedin.com/in/sanjivani-shende-09629a25a" target="_blank" rel="noreferrer">LinkedIn Profile</a>
          </p>
          <p><MapPin size={18} style={{ marginRight: '8px' }} /> Nagpur, Maharashtra</p>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
