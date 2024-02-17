const MenuItem = ({ item }) => {
  const { title, description, image_src, price } = item;
  return (
    <div className="menu-entry">
      <img className="food-image" src={image_src} />
      <div className="description-container">
        <div className="name-price-row">
          <span className="food-name">{title}</span>
          <span className="price">${price}</span>
        </div>
        <div className="food-info">{description}</div>
        <div className="button-row">
          <button className="button">-</button>
          <span id="num-ordered">0</span>
          <button id="add-button" className="button">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
