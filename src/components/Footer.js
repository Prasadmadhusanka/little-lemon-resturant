import logo_footer from "../assets/Logo_footer.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <img
            src={logo_footer}
            alt="Little Lemon Restaurant Logo"
            width="100"
          />
        </div>

        <div className="footer-column">
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order_online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contacts</h3>
          <ul>
            <li>Address: 123 Lemon Street, Chicago</li>
            <li>Phone: +1 555-555-5555</li>
            <li>Email: contact@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
