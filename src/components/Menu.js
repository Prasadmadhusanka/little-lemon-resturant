import recipes from "../utils/recipes";

const Menu = () => {
  return (
    <section className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Order Menu</button>
      </div>

      {/* Menus */}
      <div className="menus">
        {recipes.map((recipes) => (
          <div key={recipes.id} className="menu-items">
            <img src={recipes.image} alt="Recipe portrait" />
            <div className="menu-details">
              <div className="menu-header">
                <h5>{recipes.title}</h5>
                <p>${recipes.price}</p>
              </div>
              <p className="menu-description">{recipes.description}</p>
              <button className="order-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
