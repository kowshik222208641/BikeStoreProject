import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}

      <section className="about-hero">

        <div className="about-left">

          <h1>
            Ride Beyond <br />
            Limits
          </h1>

          <p>
            Welcome to <strong>Bike Hub Motors</strong>, your trusted destination
            for premium motorcycles. We believe every ride should be exciting,
            comfortable, and unforgettable.
          </p>

        </div>

        <div className="about-right">

          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900"
            alt="Bike Showroom"
          />

        </div>

      </section>

      {/* OUR STORY */}

      <section className="about-story">

        <h2>Our Story</h2>

        <p>
          Bike Hub Motors was founded with a passion for motorcycles and a
          commitment to delivering exceptional customer experiences. From
          stylish commuter bikes to powerful sports motorcycles, we offer a
          wide range of trusted brands to suit every rider.
        </p>

        <p>
          Our goal is not just to sell bikes, but to help riders find the
          perfect companion for every journey. We focus on quality, honesty,
          and long-term customer satisfaction.
        </p>

      </section>
            {/* WHY CHOOSE US */}

      <section className="about-features">

        <h2>Why Choose Bike Hub?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <span>🏍️</span>
            <h3>Premium Bikes</h3>
            <p>
              Explore the latest motorcycles from India's
              most trusted brands.
            </p>
          </div>

          <div className="feature-card">
            <span>💰</span>
            <h3>Affordable Prices</h3>
            <p>
              Competitive pricing with attractive EMI
              and finance options.
            </p>
          </div>

          <div className="feature-card">
            <span>🛠️</span>
            <h3>Authorized Service</h3>
            <p>
              Genuine spare parts and certified
              technicians for every service.
            </p>
          </div>

          <div className="feature-card">
            <span>⭐</span>
            <h3>Customer Satisfaction</h3>
            <p>
              Thousands of happy riders trust
              Bike Hub Motors every year.
            </p>
          </div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}

      <section className="about-achievements">

        <h2>Our Achievements</h2>

        <div className="achievement-grid">

          <div className="achievement-card">
            <h3>10,000+</h3>
            <p>Happy Customers</p>
          </div>

          <div className="achievement-card">
            <h3>500+</h3>
            <p>Bikes Delivered</p>
          </div>

          <div className="achievement-card">
            <h3>15+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="achievement-card">
            <h3>4.9 ★</h3>
            <p>Customer Rating</p>
          </div>

        </div>

      </section>
            {/* OUR TEAM */}

      <section className="about-team">

        <h2>Meet Our Team</h2>

        <div className="team-grid">

          <div className="team-card">
            <div className="team-avatar">👨‍💼</div>
            <h3>KOWSHIK</h3>
            <h4>Founder & CEO</h4>
            <p>
              Passionate about motorcycles and dedicated to
              delivering the best customer experience.
            </p>
          </div>

          <div className="team-card">
            <div className="team-avatar">👨‍🔧</div>
            <h3>HAFEEZ</h3>
            <h4>Chief Technician</h4>
            <p>
              Expert in bike servicing and maintenance with
              years of industry experience.
            </p>
          </div>

          <div className="team-card">
            <div className="team-avatar">👩‍💼</div>
            <h3>RAHIMA</h3>
            <h4>Sales Manager</h4>
            <p>
              Helping customers choose the perfect bike
              with personalized guidance.
            </p>
          </div>

        </div>

      </section>

      {/* OUR VALUES */}

      <section className="about-values">

        <h2>Our Core Values</h2>

        <div className="values-grid">

          <div className="value-card">
            ❤️
            <h3>Customer First</h3>
            <p>
              Every decision we make is focused on our
              customers' satisfaction.
            </p>
          </div>

          <div className="value-card">
            🏆
            <h3>Quality</h3>
            <p>
              We provide only genuine products and
              reliable services.
            </p>
          </div>

          <div className="value-card">
            🤝
            <h3>Trust</h3>
            <p>
              Building long-term relationships through
              honesty and transparency.
            </p>
          </div>

          <div className="value-card">
            🚀
            <h3>Innovation</h3>
            <p>
              Continuously improving to deliver a better
              riding experience.
            </p>
          </div>

        </div>

      </section>

      {/* BACK BUTTON */}

      <div className="about-bottom">

        <Link to="/">
          <button className="back-btn">
            ← Back To Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default About;