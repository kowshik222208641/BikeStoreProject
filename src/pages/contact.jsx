import { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `📩 Thank you ${contact.name}!\n\nYour message has been sent successfully. We'll contact you soon.`
    );

    setContact({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <div className="contact-container">

        <div className="contact-info">
          <h2>🏍 Bike Store</h2>

          <p>
            <strong>📍 Address:</strong><br />
            123 Bike Street,<br />
            Chennai, Tamil Nadu - 600001
          </p>

          <p>
            <strong>📞 Phone:</strong><br />
            +91 98765 43210
          </p>

          <p>
            <strong>📧 Email:</strong><br />
            bikestore@gmail.com
          </p>

          <p>
            <strong>🕒 Working Hours:</strong><br />
            Monday - Saturday<br />
            9:00 AM - 8:00 PM
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={contact.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={contact.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Type your message..."
            value={contact.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;