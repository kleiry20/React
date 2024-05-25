import { useState, useReducer } from "react";

const StateManagement = () => {
  const [count, setCount] = useState(0);

  const initialState = { count: 0 };
  //   replace useState with useReducer that takes 2 arguments(reducer function, initialState)
  const [state, dispatch] = useReducer(countStateReducer, initialState);

  function countStateReducer(state, action) {
    //  returns (updated state, dispatch function)
    switch (action.type) {
      case "increment":
        return { state: state + 1 };
      case "decrement":
        return { state: state - 1 };
      default:
        throw new Error();
    }
  }

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