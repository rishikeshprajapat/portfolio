import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
 import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

 function handleSubmit(e) {
   e.preventDefault();

   emailjs
     .send(
       "service_jlbbfa6",
       "template_rt2glha",
       {
         from_name: form.name,
         from_email: form.email,
         message: form.message,
       },
       "QLXJgrDI5Ed4V9l25",
     )
     .then(() => {
       alert("Message Sent Successfully!");

       setForm({
         name: "",
         email: "",
         message: "",
       });
     })
     .catch((error) => {
       console.log(error);
       alert("Failed to send message");
     });
 }

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Connect With Me</h3>

          <div className="contact-links">
            <a
              href="mailto:rishi20042005@gmail.com"
              target="_blank"
              className="contact-item"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rishikesh-prajapat-73b539291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="contact-item"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/rishikeshprajapat"
              target="_blank"
              className="contact-item"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a href="tel:6376515903" className="contact-item">
              <FaPhone />
              <span>Phone</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
