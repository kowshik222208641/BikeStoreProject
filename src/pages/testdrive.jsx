import { useState } from "react";

function TestDrive() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    bike: "",
    date: "",
    time: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `🚗 Test Drive Scheduled!\n\nThank you ${form.name}.\nYour test drive has been booked successfully.`
    );

    setForm({
      name: "",
      phone: "",
      bike: "",
      date: "",
      time: "",
      city: "",
    });
  };

  return (
    <div className="testdrive-page">
      <div className="testdrive-container">
        <h1>Book a Test Drive</h1>

        <form className="testdrive-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <select
            name="bike"
            value={form.bike}
            onChange={handleChange}
            required
          >
            <option value="">Select Bike</option>
            <option>TVS Raider 125</option>
            <option>TVS Apache RTR 160</option>
            <option>Yamaha R15 V4</option>
            <option>Royal Enfield Classic 350</option>
            <option>KTM Duke 200</option>
            <option>Honda SP125</option>
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="Your City"
            value={form.city}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Schedule Test Drive
          </button>

        </form>
      </div>
    </div>
  );
}

export default TestDrive;