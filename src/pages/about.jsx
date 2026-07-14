function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Bike Store</h1>

        <p className="about-text">
          Welcome to <strong>Bike Store</strong>, your trusted destination
          for premium motorcycles. We offer the latest bikes from leading
          brands with affordable prices, flexible finance options and
          excellent customer support.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h2>🎯 Our Mission</h2>
            <p>
              To help every rider find the perfect bike with honest pricing,
              quality service and complete customer satisfaction.
            </p>
          </div>

          <div className="about-card">
            <h2>👁️ Our Vision</h2>
            <p>
              To become one of India's most trusted motorcycle showrooms by
              delivering quality products and outstanding service.
            </p>
          </div>

          <div className="about-card">
            <h2>⭐ Why Choose Us?</h2>
            <ul>
              <li>✔ Premium Bike Collection</li>
              <li>✔ Affordable EMI Options</li>
              <li>✔ Free Test Drive</li>
              <li>✔ Genuine Spare Parts</li>
              <li>✔ Expert Service Team</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>📊 Store Statistics</h2>

            <h3>5000+</h3>
            <p>Happy Customers</p>

            <h3>250+</h3>
            <p>Bikes Available</p>

            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;