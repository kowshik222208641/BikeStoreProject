import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function TestDrive() {
  return (
    <div className="ride-page">

      {/* HERO SECTION */}

      <section className="ride-hero">

        <div className="ride-content">

          <h1>
            Feel The Power <br />
            Before You Buy
          </h1>

          <p>
            Experience performance, comfort, speed and confidence
            with an exclusive test ride.
          </p>

          <a href="#rideform">
            <button className="ride-btn">
              Book Test Ride
            </button>
          </a>

        </div>

        <div className="ride-image">

          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900"
            alt="Bike"
          />

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="ride-features">

        <h2>Why Ride With Us?</h2>

        <div className="feature-grid">

          <div className="ride-box">
            🏍️
            <h3>Premium Bikes</h3>
            <p>Ride the latest models before purchasing.</p>
          </div>

          <div className="ride-box">
            🛡️
            <h3>Safety Gear</h3>
            <p>Helmet & riding gear provided free.</p>
          </div>

          <div className="ride-box">
            👨‍🔧
            <h3>Expert Guidance</h3>
            <p>Professional riding experts assist you.</p>
          </div>

          <div className="ride-box">
            ⏰
            <h3>30 Minute Ride</h3>
            <p>City & highway riding experience.</p>
          </div>

        </div>

      </section>
            {/* RIDE PROCESS */}

      <section className="ride-process">

        <h2>How Your Test Ride Works</h2>

        <div className="timeline">

          <div className="step">
            <div className="circle">1</div>
            <h3>Register</h3>
            <p>Fill in your personal details.</p>
          </div>

          <div className="step">
            <div className="circle">2</div>
            <h3>Verify License</h3>
            <p>Bring your valid driving license.</p>
          </div>

          <div className="step">
            <div className="circle">3</div>
            <h3>Safety Briefing</h3>
            <p>Our experts explain riding guidelines.</p>
          </div>

          <div className="step">
            <div className="circle">4</div>
            <h3>Enjoy The Ride</h3>
            <p>Experience the bike on city roads.</p>
          </div>

          <div className="step">
            <div className="circle">5</div>
            <h3>Feedback</h3>
            <p>Share your experience and get offers.</p>
          </div>

        </div>

      </section>

      {/* BOOK TEST RIDE */}

      <section className="ride-book" id="rideform">

        <h2>Reserve Your Test Ride</h2>

        <form className="ride-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
          />

          <select>
            <option>Select Bike</option>
            <option>TVS Raider 125</option>
            <option>Yamaha R15 V4</option>
            <option>Royal Enfield Hunter 350</option>
            <option>KTM Duke 250</option>
            <option>Bajaj Pulsar NS200</option>
          </select>

          <input type="date" />

          <input type="time" />

          <textarea
            rows="5"
            placeholder="Additional Message"
          ></textarea>

          <button className="ride-submit">
            Book My Ride
          </button>

        </form>

      </section>

      {/* CUSTOMER REVIEWS */}

      <section className="ride-review">

        <h2>Customer Reviews</h2>

        <div className="review-grid">

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "The test ride helped me choose the perfect bike.
              Amazing experience!"
            </p>
            <h4>- Arjun</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "Professional staff and smooth booking process.
              Highly recommended."
            </p>
            <h4>- Karthik</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "Loved riding the Yamaha R15 before buying it."
            </p>
            <h4>- Rahul</h4>
          </div>

        </div>

      </section>

      <div className="ride-home">

        <Link to="/">
          <button className="back-btn">
            ← Back To Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default TestDrive;