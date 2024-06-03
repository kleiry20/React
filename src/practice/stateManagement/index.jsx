import { useState, useReducer, useEffect } from "react";

const StateManagement = () => {
  const [count, setCount] = useState(0);

  //   example 2 - useReducer
  const initialState = { count: 0 };
  //   replace useState with useReducer that takes 2 arguments(reducer function, initialState)
  const [state, dispatch] = useReducer(countStateReducer, initialState);

  function countStateReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { state: state + 1 };
      case "decrement":
        return { state: state - 1 };
      default:
        throw new Error();
    }
  }

  //   example 3 -

  return (
    <>
      {/* ex 1 - counter using useState */}
      <h3>Counter (using useState)</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p style={{ display: "inline", padding: "0 2rem" }}>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>

      <br />
      <br />

      {/* ex 2 - counter using useReducer */}
      <div>
        <h3>Counter (using useReducer)</h3>
        <p style={{ display: "inline", padding: "0 2rem" }}>
          Count: {state.count}
        </p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increase
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrease
        </button>
      </div>

      {/* ex 3 - tasks reducer  */}

      <Crud />
    </>
  );
};

export default StateManagement;

// useReducer:
// The useReducer Hook takes two arguments:
// 1 - A reducer function
// 2 - An initial state

// And it returns:
// 1 - A stateful value
// 2 - A dispatch function (to “dispatch” user actions to the reducer)

const Crud = () => {
  const [data, setData] = useState([]);

  const handleCreate = () => {
    const newData = {
      id: Math.random().toString(36).substring(7),
      name: "New Item",
    };
    setData([...data, newData]);
  };

  const handleUpdate = (id, name) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, name };
      }
      return item;
    });
    setData(updatedData);
  };

  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <button onClick={handleCreate}>Create</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleUpdate(item.id, "Updated Item")}>
              Update
            </button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
