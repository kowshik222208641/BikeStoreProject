import { Link } from "react-router-dom";

function Bikes() {
  const bikes = [
    {
      id: 1,
      name: "TVS Raider 125",
      price: "₹1,10,000",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600",
      description: "A stylish 125cc commuter bike with excellent mileage and sporty design."
    },
    {
      id: 2,
      name: "TVS Apache RTR 160",
      price: "₹1,45,000",
      image:
        "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=600",
      description: "Performance bike with aggressive styling and racing DNA."
    },
    {
      id: 3,
      name: "Yamaha R15 V4",
      price: "₹2,10,000",
      image:
        "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600",
      description: "Premium sports bike with advanced technology and stunning looks."
    },
    {
      id: 4,
      name: "Royal Enfield Classic 350",
      price: "₹2,35,000",
      image:
        "https://images.unsplash.com/photo-1622185135505-2d7950039943?w=600",
      description: "Classic styling, refined engine and comfortable long rides."
    },
    {
      id: 5,
      name: "KTM Duke 200",
      price: "₹2,20,000",
      image:
        "https://images.unsplash.com/photo-1611241443709-8dcb9f9b6d59?w=600",
      description: "Powerful street bike with sharp handling and sporty performance."
    },
    {
      id: 6,
      name: "Honda SP125",
      price: "₹1,05,000",
      image:
        "https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=600",
      description: "Reliable commuter bike with smooth engine and excellent fuel efficiency."
    }
  ];

  return (
    <div className="bikes-page">
      <h1 className="page-title">Our Bikes</h1>

      <div className="bike-grid">
        {bikes.map((bike) => (
          <div className="bike-card" key={bike.id}>
            <img src={bike.image} alt={bike.name} />

            <div className="bike-info">
              <h2>{bike.name}</h2>

              <h3 className="price">{bike.price}</h3>

              <p>{bike.description}</p>

              <div className="card-buttons">
                <Link to="/booking">
                  <button className="book-btn">
                    Book Now
                  </button>
                </Link>

                <Link to="/testdrive">
                  <button className="test-btn">
                    Test Drive
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bikes;