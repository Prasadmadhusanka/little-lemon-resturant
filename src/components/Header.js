import logo from '../assets/Logo.svg'
import Nav from '../components/Nav'

function Header() {
  return <header>
    <img src={logo} alt="Little Lemon Resturant Logo" width={150} />
    <Nav></Nav>
  </header>;
}

export default Header;
