const MenuItem = ({ item }) => {
  const { title, description, image_src, price } = item;
  return (
    <div className="menu-entry">
      <img className="food-image" src={image_src} />
      <div className="description-container">
        <div className="food-name">{title}</div>
        <div className="food-info">{description}</div>
        <div className="buttonRow">
          <div className="price">${price}</div>
          <button className="addButton">add</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
