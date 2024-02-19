import QuantitySelector from "./QuantitySelector";

const MenuItem = ({ item }) => {
  const { title, description, image_src, price } = item;
  return (
    <div className="menu-entry">
      <img className="food-image" src={image_src} />
      <div className="food-info-container">
        <div className="name-price-row">
          <span className="food-name">{title}</span>
          <span className="price">${price}</span>
        </div>
        <div className="food-caption">{description}</div>
        <QuantitySelector />
      </div>
    </div>
  );
};

export default MenuItem;
