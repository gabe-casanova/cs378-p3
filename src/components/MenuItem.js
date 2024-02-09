const MenuItem = ({ item }) => {
  const { title, description, imageName, price } = item;
  const imagePath = `images/${imageName}`;
  return (
    <div className="menu-entry">
      <img className="food-image" src={imagePath} />
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
