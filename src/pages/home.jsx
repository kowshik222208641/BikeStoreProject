import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to K MOTORS</h1>

          <p>
            Find your dream bike with the best offers, premium quality,
            and exciting test ride experience.
          </p>

          <Link to="/bikes">
            <button className="hero-btn">
              Explore Bikes
            </button>
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h3>🏍 Premium Bikes</h3>
            <p>
              Latest sports, commuter and adventure bikes from top brands.
            </p>
          </div>

          <div className="feature-card">
            <h3>💰 Best Price</h3>
            <p>
              Affordable prices with exciting finance and EMI options.
            </p>
          </div>

          <div className="feature-card">
            <h3>🚗 Free Test Drive</h3>
            <p>
              Schedule a free test drive before making your decision.
            </p>
          </div>

          <div className="feature-card">
            <h3>🛠 Service Support</h3>
            <p>
              Trusted after-sales service and genuine spare parts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;