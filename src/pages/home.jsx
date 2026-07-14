import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO SECTION ================= */}

      <section className="hero">

        <div className="hero-left">

          <span className="hero-tag">
            🏍️ Welcome to K Motors
          </span>

          <h1>
            Ride Beyond
            <br />
            Your Dreams
          </h1>

          <p>
            Discover premium motorcycles with outstanding
            performance, modern technology, and unbeatable
            offers. Start your next adventure today.
          </p>

          <div className="hero-buttons">

            <Link to="/bikes">
              <button className="primary-btn">
                Explore Bikes
              </button>
            </Link>

            <Link to="/testdrive">
              <button className="secondary-btn">
                Book Test Ride
              </button>
            </Link>

          </div>

          <div className="hero-stats">

            <div>
              <h3>10K+</h3>
              <p>Happy Riders</p>
            </div>

            <div>
              <h3>500+</h3>
              <p>Bikes Sold</p>
            </div>

            <div>
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200"
            alt="Premium Bike"
          />

        </div>

      </section>

      {/* ================= SCROLL DOWN ================= */}

      <div className="scroll-down">

        <span>Scroll Down</span>

        <div className="mouse">
          <div className="wheel"></div>
        </div>

      </div>
            {/* ================= PREMIUM BRANDS ================= */}

      <section className="brands">

        <h2>Our Premium Brands</h2>

        <p>
          We proudly offer motorcycles from India's most
          trusted and loved manufacturers.
        </p>

        <div className="brand-grid">

          <div className="brand-card">
            🏍️
            <h3>TVS</h3>
          </div>

          <div className="brand-card">
            ⚡
            <h3>Yamaha</h3>
          </div>

          <div className="brand-card">
            🔥
            <h3>KTM</h3>
          </div>

          <div className="brand-card">
            👑
            <h3>Royal Enfield</h3>
          </div>

          <div className="brand-card">
            🚀
            <h3>Honda</h3>
          </div>

          <div className="brand-card">
            💨
            <h3>Bajaj</h3>
          </div>

        </div>

      </section>

      {/* ================= FEATURED BIKES ================= */}

      <section className="featured-bikes">

        <h2>Featured Bikes</h2>

        <p>
          Explore our most popular motorcycles chosen by
          thousands of happy riders.
        </p>

        <div className="bike-grid">

          <div className="bike-card">

            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
              alt="TVS Raider"
            />

            <h3>TVS Raider 125</h3>

            <div className="bike-info">

              <span>💰 ₹1,10,000</span>

              <span>⛽ 67 km/l</span>

            </div>

            <div className="bike-buttons">

              <Link to="/booking">
                <button className="card-btn">
                  Book Now
                </button>
              </Link>

              <Link to="/testdrive">
                <button className="card-btn outline">
                  Test Ride
                </button>
              </Link>

            </div>

          </div>

          <div className="bike-card">

            <img
              src="https://images.unsplash.com/photo-1517846693594-1567da72af75?w=800"
              alt="Yamaha R15"
            />

            <h3>Yamaha R15 V4</h3>

            <div className="bike-info">

              <span>💰 ₹1,95,000</span>

              <span>⚡ 155cc</span>

            </div>

            <div className="bike-buttons">

              <Link to="/booking">
                <button className="card-btn">
                  Book Now
                </button>
              </Link>

              <Link to="/testdrive">
                <button className="card-btn outline">
                  Test Ride
                </button>
              </Link>

            </div>

          </div>

          <div className="bike-card">

            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800"
              alt="Royal Enfield Hunter"
            />

            <h3>Hunter 350</h3>

            <div className="bike-info">

              <span>💰 ₹1,75,000</span>

              <span>🏍️ 349cc</span>

            </div>

            <div className="bike-buttons">

              <Link to="/booking">
                <button className="card-btn">
                  Book Now
                </button>
              </Link>

              <Link to="/testdrive">
                <button className="card-btn outline">
                  Test Ride
                </button>
              </Link>

            </div>

          </div>

        </div>

      </section>
            {/* ================= WHY CHOOSE US ================= */}

      <section className="why-us">

        <h2>Why Choose Bike Hub Motors?</h2>

        <p>
          We don't just sell motorcycles—we build lasting
          relationships with riders through trust, quality,
          and exceptional service.
        </p>

        <div className="why-grid">

          <div className="why-card">
            <span>🏆</span>
            <h3>Trusted Dealer</h3>
            <p>
              Over 15 years of excellence in delivering
              premium motorcycles.
            </p>
          </div>

          <div className="why-card">
            <span>💳</span>
            <h3>Easy EMI</h3>
            <p>
              Flexible finance options with low-interest
              monthly installments.
            </p>
          </div>

          <div className="why-card">
            <span>🛠️</span>
            <h3>Authorized Service</h3>
            <p>
              Genuine spare parts with certified service
              technicians.
            </p>
          </div>

          <div className="why-card">
            <span>🚚</span>
            <h3>Fast Delivery</h3>
            <p>
              Get your dream bike delivered quickly and
              safely to your doorstep.
            </p>
          </div>

        </div>

      </section>

      {/* ================= ACHIEVEMENTS ================= */}

      <section className="home-achievements">

        <h2>Our Journey in Numbers</h2>

        <div className="achievement-row">

          <div className="counter-card">
            <h3>10,000+</h3>
            <p>Happy Customers</p>
          </div>

          <div className="counter-card">
            <h3>500+</h3>
            <p>Bikes Delivered</p>
          </div>

          <div className="counter-card">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>

          <div className="counter-card">
            <h3>4.9 ★</h3>
            <p>Customer Rating</p>
          </div>

        </div>

      </section>

      {/* ================= CUSTOMER REVIEWS ================= */}

      <section className="home-reviews">

        <h2>What Our Riders Say</h2>

        <div className="review-container">

          <div className="review-box">

            <h3>⭐⭐⭐⭐⭐</h3>

            <p>
              "The booking process was smooth and the staff
              helped me choose the perfect bike. Highly
              recommended!"
            </p>

            <h4>- Arjun Kumar</h4>

          </div>

          <div className="review-box">

            <h3>⭐⭐⭐⭐⭐</h3>

            <p>
              "Amazing showroom, friendly team and the
              test ride experience was fantastic."
            </p>

            <h4>- Karthik S</h4>

          </div>

          <div className="review-box">

            <h3>⭐⭐⭐⭐⭐</h3>

            <p>
              "Best place to buy a motorcycle. Great EMI
              options and excellent after-sales service."
            </p>

            <h4>- Rahul M</h4>

          </div>

        </div>

      </section>

      {/* ================= SPECIAL OFFERS ================= */}

      <section className="special-offers">

        <h2>Today's Special Offers</h2>

        <div className="offer-grid">

          <div className="offer-card">
            🔥
            <h3>₹10,000 OFF</h3>
            <p>On selected premium bikes.</p>
          </div>

          <div className="offer-card">
            🎁
            <h3>Free Helmet</h3>
            <p>Get a premium helmet with every booking.</p>
          </div>

          <div className="offer-card">
            💳
            <h3>Zero Down Payment</h3>
            <p>Easy EMI plans available for eligible buyers.</p>
          </div>

          <div className="offer-card">
            🛠️
            <h3>3 Free Services</h3>
            <p>Enjoy complimentary servicing after purchase.</p>
          </div>

        </div>

      </section>
            {/* ================= CALL TO ACTION ================= */}

      <section className="home-cta">

        <div className="cta-content">

          <h2>Ready to Ride Your Dream Bike?</h2>

          <p>
            Discover premium motorcycles, exclusive offers,
            and an unforgettable riding experience.
          </p>

          <div className="cta-buttons">

            <Link to="/booking">
              <button className="primary-btn">
                Book Your Bike
              </button>
            </Link>

            <Link to="/testdrive">
              <button className="secondary-btn">
                Schedule Test Ride
              </button>
            </Link>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="home-footer">

        <div className="footer-grid">

          <div className="footer-column">

            <h3>Bike Hub Motors</h3>

            <p>
              Your trusted destination for premium motorcycles,
              genuine service, and unforgettable riding experiences.
            </p>

          </div>

          <div className="footer-column">

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/bikes">Bikes</Link>
            <Link to="/about">About</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/testdrive">Test Ride</Link>
            <Link to="/contact">Contact</Link>

          </div>

          <div className="footer-column">

            <h3>Our Services</h3>

            <p>🏍️ New Bike Sales</p>
            <p>🛠 Authorized Service</p>
            <p>💳 EMI Assistance</p>
            <p>🚚 Home Delivery</p>

          </div>

          <div className="footer-column">

            <h3>Follow Us</h3>

            <p>📘 Facebook</p>
            <p>📸 Instagram</p>
            <p>▶️ YouTube</p>
            <p>💬 WhatsApp</p>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>
            © 2026 Bike Hub Motors. All Rights Reserved.
          </p>

          <Link to="/">
            <button className="back-top">
              ↑ Back To Top
            </button>
          </Link>

        </div>

      </footer>

    </div>
  );
}

export default Home;