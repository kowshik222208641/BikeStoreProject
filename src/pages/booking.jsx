import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../App.css";

function Booking() {
  const handleBooking = (e) => {
  e.preventDefault();

  Swal.fire({
    title: "🎉 Booking Successful!",
    text: "Thank you for choosing our Bike Store. We will contact you shortly.",
    icon: "success",
    confirmButtonText: "Awesome!",
    confirmButtonColor: "#2563eb",
  });
};
  return (
    <div className="booking-page">

      <div className="booking-hero">
        <h1>Reserve Your Dream Bike</h1>
        <p>
          Fill in your details and book your favorite bike instantly.
        </p>
      </div>

      <div className="booking-container">

        <div className="booking-left">

          <h2>Booking Details</h2>

          <form className="booking-form" onSubmit={handleBooking}>

            <div className="input-box">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className="input-box">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter mobile number"
              />
            </div>

            <div className="input-box">
              <label>Select Bike</label>
              <select>
                <option>TVS Raider 125</option>
                <option>Yamaha R15 V4</option>
                <option>Royal Enfield Hunter 350</option>
                <option>KTM Duke 250</option>
                <option>Bajaj Pulsar NS200</option>
              </select>
            </div>

            <div className="input-box">
              <label>Booking Date</label>
              <input type="date" />
            </div>

            <div className="input-box">
              <label>Preferred Color</label>
              <select>
                <option>Black</option>
                <option>Blue</option>
                <option>Red</option>
                <option>Grey</option>
                <option>White</option>
              </select>
            </div>

            <div className="input-box">
              <label>City</label>
              <input
                type="text"
                placeholder="Enter your city"
              />
            </div>

            <div className="input-box">
              <label>Payment Method</label>
              <select>
                <option>Cash</option>
                <option>UPI</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Net Banking</option>
              </select>
            </div>

            <div className="input-box full">
              <label>Additional Message</label>
              <textarea
                rows="5"
                placeholder="Any special request..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="booking-btn"
            >
              Confirm Booking
            </button>

          </form>

        </div>

        <div className="booking-right">

          <div className="booking-card">
            <h2>Booking Benefits</h2>

            <div className="benefit">🚀 Instant Confirmation</div>
            <div className="benefit">🛡️ Genuine Warranty</div>
            <div className="benefit">💰 Best Price Guarantee</div>
            <div className="benefit">🎁 Free Helmet Offer</div>
            <div className="benefit">📞 24×7 Customer Support</div>
            <div className="benefit">⚡ Fast Delivery</div>

          </div>

          <div className="booking-offer">

            <h3>🔥 Special Offer</h3>

            <p>Book your bike today and get:</p>

            <ul>
              <li>🎁 Free Premium Helmet</li>
              <li>🛠️ 2 Free Services</li>
              <li>💳 Easy EMI Available</li>
              <li>📍 Free Home Delivery*</li>
            </ul>

          </div>

        </div>

      </div>

      <div className="booking-bottom">
        <Link to="/">
          <button className="back-btn">
            ← Back to Home
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Booking;