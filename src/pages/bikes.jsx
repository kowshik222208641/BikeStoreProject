import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Bikes() {
  return (
    <div className="premium-bikes-page">

      {/* ================= HERO ================= */}

      <section className="bikes-hero">

        <div className="bikes-hero-content">

          <span className="hero-badge">
            🏍️ Premium Motorcycle Collection
          </span>

          <h1>
            Find Your
            <br />
            Dream Machine
          </h1>

          <p>
            Explore India's most loved motorcycles with
            premium styling, advanced technology, outstanding
            mileage, and unbeatable prices.
          </p>

        </div>

      </section>

      {/* ================= SEARCH ================= */}

      <section className="bike-search-section">

        <div className="search-box">

          <input
            type="text"
            placeholder="🔍 Search your favourite bike..."
          />

          <button>
            Search
          </button>

        </div>

      </section>

      {/* ================= CATEGORY ================= */}

      <section className="bike-category">

        <h2>Browse Categories</h2>

        <div className="category-grid">

          <div className="category-card">
            🏍️
            <h3>Sports</h3>
          </div>

          <div className="category-card">
            👑
            <h3>Cruiser</h3>
          </div>

          <div className="category-card">
            🌍
            <h3>Adventure</h3>
          </div>

          <div className="category-card">
            ⚡
            <h3>Street</h3>
          </div>

          <div className="category-card">
            🛵
            <h3>Scooter</h3>
          </div>

        </div>

      </section>

      {/* ================= FEATURED COLLECTION ================= */}

      <section className="premium-bike-list">

        <h2>Featured Collection</h2>

        <p>
          Choose from our best-selling motorcycles with
          premium performance and attractive offers.
        </p>

        <div className="premium-bike-grid">

                  {/* ================= BIKE 1 ================= */}

          <div className="premium-bike-card">

            <span className="bike-badge">🔥 Best Seller</span>

            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900"
              alt="TVS Raider 125"
            />

            <div className="bike-content">

              <div className="bike-top">

                <h3>TVS Raider 125</h3>

                <span className="rating">
                  ⭐⭐⭐⭐⭐
                </span>

              </div>

              <div className="spec-grid">

                <span>⚙️ 124.8cc</span>
                <span>⛽ 67 km/l</span>
                <span>💨 99 km/h</span>
                <span>💰 ₹1.10 Lakh</span>

              </div>

              <div className="bike-action">

                <Link to="/booking">
                  <button className="premium-btn">
                    Book Now
                  </button>
                </Link>

                <Link to="/testdrive">
                  <button className="premium-btn outline-btn">
                    Test Ride
                  </button>
                </Link>

              </div>

            </div>

          </div>

          {/* ================= BIKE 2 ================= */}

          <div className="premium-bike-card">

            <span className="bike-badge new">
              🆕 New Arrival
            </span>

            <img
              src="https://images.unsplash.com/photo-1517846693594-1567da72af75?w=900"
              alt="Yamaha R15"
            />

            <div className="bike-content">

              <div className="bike-top">

                <h3>Yamaha R15 V4</h3>

                <span className="rating">
                  ⭐⭐⭐⭐⭐
                </span>

              </div>

              <div className="spec-grid">

                <span>⚙️ 155cc</span>
                <span>⛽ 51 km/l</span>
                <span>💨 140 km/h</span>
                <span>💰 ₹1.95 Lakh</span>

              </div>

              <div className="bike-action">

                <Link to="/booking">
                  <button className="premium-btn">
                    Book Now
                  </button>
                </Link>

                <Link to="/testdrive">
                  <button className="premium-btn outline-btn">
                    Test Ride
                  </button>
                </Link>

              </div>

            </div>

          </div>

          {/* ================= BIKE 3 ================= */}

          <div className="premium-bike-card">

            <span className="bike-badge hot">
              ⚡ Hot Deal
            </span>

            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900"
              alt="Hunter 350"
            />

            <div className="bike-content">

              <div className="bike-top">

                <h3>Royal Enfield Hunter 350</h3>

                <span className="rating">
                  ⭐⭐⭐⭐⭐
                </span>

              </div>

              <div className="spec-grid">

                <span>⚙️ 349cc</span>
                <span>⛽ 36 km/l</span>
                <span>💨 130 km/h</span>
                <span>💰 ₹1.75 Lakh</span>

              </div>

              <div className="bike-action">

                <Link to="/booking">
                  <button className="premium-btn">
                    Book Now
                  </button>
                </Link>

                <Link to="/testdrive">
                  <button className="premium-btn outline-btn">
                    Test Ride
                  </button>
                </Link>

              </div>

            </div>

          </div>

          {/* ================= BIKE 4 ================= */}

          <div className="premium-bike-card">

            <span className="bike-badge">
              🚀 Trending
            </span>

            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900"
              alt="KTM Duke 250"
            />

            <div className="bike-content">

              <div className="bike-top">

                <h3>KTM Duke 250</h3>

                <span className="rating">
                  ⭐⭐⭐⭐⭐
                </span>

              </div>

              <div className="spec-grid">

                <span>⚙️ 248cc</span>
                <span>⛽ 35 km/l</span>
                <span>💨 148 km/h</span>
                <span>💰 ₹2.45 Lakh</span>

              </div>

              <div className="bike-action">

                <Link to="/booking">
                  <button className="premium-btn">
                    Book Now
                  </button>
                </Link>

                <Link to="/testdrive">
                  <button className="premium-btn outline-btn">
                    Test Ride
                  </button>
                </Link>

              </div>

            </div>

          </div>
                    {/* ================= BIKE 5 ================= */}

          <div className="premium-bike-card">

            <span className="bike-badge limited">💎 Limited Edition</span>

            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900"
              alt="Apache RTR 310"
            />

            <div className="bike-content">

              <div className="bike-top">
                <h3>TVS Apache RTR 310</h3>
                <span className="rating">⭐⭐⭐⭐⭐</span>
              </div>

              <div className="spec-grid">
                <span>⚙️ 312cc</span>
                <span>⛽ 35 km/l</span>
                <span>💨 160 km/h</span>
                <span>💰 ₹2.55 Lakh</span>
              </div>

              <div className="bike-action">
                <Link to="/booking">
                  <button className="premium-btn">Book Now</button>
                </Link>

                <Link to="/testdrive">
                  <button className="premium-btn outline-btn">
                    Test Ride
                  </button>
                </Link>
              </div>

            </div>

          </div>

          {/* ================= BIKE 6 ================= */}

          <div className="premium-bike-card">

            <span className="bike-badge hot">🔥 Popular</span>

            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900"
              alt="MT15"
            />

            <div className="bike-content">

              <div className="bike-top">
                <h3>Yamaha MT-15</h3>
                <span className="rating">⭐⭐⭐⭐⭐</span>
              </div>

              <div className="spec-grid">
                <span>⚙️ 155cc</span>
                <span>⛽ 48 km/l</span>
                <span>💨 135 km/h</span>
                <span>💰 ₹1.82 Lakh</span>
              </div>

              <div className="bike-action">
                <Link to="/booking">
                  <button className="premium-btn">Book Now</button>
                </Link>

                <Link to="/testdrive">
                  <button className="premium-btn outline-btn">
                    Test Ride
                  </button>
                </Link>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="bike-cta">

        <h2>Ready To Own Your Dream Bike?</h2>

        <p>
          Book today and enjoy exciting offers,
          easy EMI options and free accessories.
        </p>

        <div className="cta-buttons">

          <Link to="/booking">
            <button className="premium-btn">
              Book Your Bike
            </button>
          </Link>

          <Link to="/testdrive">
            <button className="premium-btn outline-btn">
              Schedule Test Ride
            </button>
          </Link>

        </div>

      </section>

      {/* ================= BACK BUTTON ================= */}

      <div className="bikes-bottom">

        <Link to="/">
          <button className="back-btn">
            ← Back To Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Bikes;