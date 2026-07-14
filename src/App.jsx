import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Bikes from "./pages/bikes";
import About from "./pages/about";
import Booking from "./pages/booking";
import TestDrive from "./pages/testdrive";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/testdrive" element={<TestDrive />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;