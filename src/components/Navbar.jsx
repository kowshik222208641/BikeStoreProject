import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">K MOTORS </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/bikes">
            Bikes
          </NavLink>
        </li>

        

        <li>
          <NavLink to="/booking">
            Booking
          </NavLink>
        </li>

        <li>
          <NavLink to="/testdrive">
            Test Drive
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;