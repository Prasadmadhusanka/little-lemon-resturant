import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navbar Links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <Link to="/reservation">Reservations</Link>
        </li>
        <li>
          <a href="/order_online">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
