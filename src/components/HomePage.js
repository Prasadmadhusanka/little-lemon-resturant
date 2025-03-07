import { Link } from "react-router-dom";
import bannerImg from "../assets/restaurantfood.jpg";

function HomePage() {
  return (
    <section className="Banner">
      {/* Banner text */}
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant,{" "}
          <br className="mobile-hidden" />
          focused on traditional recipes served with a modern twist.
        </p>
        <Link to="/reservation">
          <button aria-label="On Click">Reserve a table</button>
        </Link>
        {/* Banner Image */}
        <img src={bannerImg} alt="Banner Img" className="banner-img" />
      </div>
    </section>
  );
}

export default HomePage;
