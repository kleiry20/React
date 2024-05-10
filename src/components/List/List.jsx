import PropTypes from "prop-types";

const List = (props) => {
  // const { itemList, category } = props;
  const category = props.category;
  const itemList = props.items;

  // ------------------- SORTING ARRAY OF OBJECTS  lexicographically -------------
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL ORDER
  // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC ORDER
  // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC ORDER

  // -------------------- FILTER METHOD ------------------
  // const lowCalFruits = itemList.filter((fruit) => fruit.calories < 100);
  // console.log(lowCalFruits);
  // lowCalFruits.sort((a, b) => a.calories - b.calories);

  // const lowCalFruitItems = lowCalFruits.map((lowCalFruit) => (
  //   <li key={lowCalFruit.id}>
  //     {lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b>
  //   </li>
  // ));

  // ---------------------- MAP METHOD --------------------
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h2 className="list-category">{category}</h2>
      <ul className="list-items">{listItems}</ul>
      {/* <h3>Low Calorie Fruits</h3>
      <ul>{lowCalFruitItems}</ul> */}
    </>
  );
};

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
