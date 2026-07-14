import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* HERO SECTION */}

      <section className="contact-hero">

        <h1>Get In Touch</h1>

        <p>
          We're always ready to help you find your dream bike.
          Contact our team anytime.
        </p>

      </section>

      {/* CONTACT INFO */}

      <section className="contact-info">

        <div className="info-card">
          <span>📍</span>
          <h3>Showroom</h3>
          <p>
            Bike Hub Motors<br />
            Chennai, Tamil Nadu
          </p>
        </div>

        <div className="info-card">
          <span>📞</span>
          <h3>Phone</h3>
          <p>
            +91 98765 43210
          </p>
        </div>

        <div className="info-card">
          <span>📧</span>
          <h3>Email</h3>
          <p>
            support@bikehub.com
          </p>
        </div>

        <div className="info-card">
          <span>🕒</span>
          <h3>Working Hours</h3>
          <p>
            Mon - Sat<br />
            9:00 AM - 8:00 PM
          </p>
        </div>

      </section>
            {/* CONTACT FORM */}

      <section className="contact-section">

        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button className="contact-btn">
              Send Message
            </button>

          </form>

        </div>

        <div className="contact-side">

          <h2>Connect With Us</h2>

          <p>
            Follow us on social media to stay updated with
            the latest bike launches, offers, events, and
            exclusive test ride opportunities.
          </p>

          <div className="social-grid">

            <div className="social-card instagram">
              📷
              <h3>Instagram</h3>
            </div>

            <div className="social-card facebook">
              👍
              <h3>Facebook</h3>
            </div>

            <div className="social-card youtube">
              ▶️
              <h3>YouTube</h3>
            </div>

            <div className="social-card whatsapp">
              💬
              <h3>WhatsApp</h3>
            </div>

          </div>

        </div>

      </section>
            {/* LOCATION */}

      <section className="contact-map">

        <h2>Visit Our Showroom</h2>

        <div className="map-box">

          <p>📍 Bike Hub Motors</p>

          <p>123 GST Road, Chennai, Tamil Nadu</p>

          <p>
            (Google Maps can be embedded here later.)
          </p>

        </div>

      </section>

      {/* FAQ */}

      <section className="contact-faq">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-grid">

          <div className="faq-card">
            <h3>🏍️ Can I book a bike online?</h3>
            <p>
              Yes, you can easily reserve your favorite bike
              through our Booking page.
            </p>
          </div>

          <div className="faq-card">
            <h3>🚀 Is the test ride free?</h3>
            <p>
              Yes. Test rides are completely free with a valid
              driving license.
            </p>
          </div>

          <div className="faq-card">
            <h3>💳 Do you provide EMI?</h3>
            <p>
              Yes, we provide flexible EMI options through
              multiple banking partners.
            </p>
          </div>

          <div className="faq-card">
            <h3>🛠️ Do you provide servicing?</h3>
            <p>
              Yes, we offer genuine spare parts and
              authorized service support.
            </p>
          </div>

        </div>

      </section>

      {/* BACK BUTTON */}

      <div className="contact-bottom">

        <Link to="/">
          <button className="back-btn">
            ← Back To Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Contact;