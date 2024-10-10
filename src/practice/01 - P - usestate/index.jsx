import { useState } from "react";
import "./styles.css";

// -State Management (useState,useReducer), Redux toolkit basics (including async thunks)
// -useEffect

const Usestate = () => {
  const [name, setName] = useState("Ben");
  const [counter, setCounter] = useState(0);
  //   const [toggleText, setToggleText] = useState("Hi! Can you see me?");
  const [isVisible, setIsVisible] = useState(true);
  const [inputField, setInputField] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [listItems, setListItems] = useState([
    {
      id: 0,
      item: "apple",
      activeState: "APPLE",
    },
    {
      id: 1,
      item: "chips",
      activeState: "CHIPS",
    },
    {
      id: 2,
      item: "banana",
      activeState: "BANANA",
    },
    {
      id: 3,
      item: "orange",
      activeState: "ORANGE",
    },
  ]);

  const myList = [
    { name: "Item 1", active: true },
    { name: "Item 2", active: false },
    { name: "Item 3", active: true },
  ];
  const [items, setItems] = useState(myList);

  //   function toggleState(index) {
  //     myList[index].active === true
  //       ? (myList[index].active = false)
  //       : (myList[index].active = true);
  //     setItems(myList);
  //     console.log("items", items);
  //     console.log("myList", myList);
  //   }

  function toggleState(index) {
    setItems(
      items.map((item, i) => {
        index === i ? { ...item, active: !item.active } : item;
      })
    );
  }

  return (
    <div className="grid">
      <div className="exercise">
        <h3>Exercise 0</h3>
        <p>{name}</p>
        <button
          onClick={() => {
            const newName = prompt("enter new name: ");
            setName(newName);
          }}
        >
          update name
        </button>
      </div>

      {/* exercise 1 - counter  */}
      <div>
        <h3>Exercise 1</h3>
        <p>Counter value: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button
          onClick={() => {
            if (counter > 0) setCounter(counter - 1);
            else return 0;
          }}
        >
          Decrease
        </button>
      </div>

      {/* exercise 2 - toggle text */}
      <div>
        <h3>Exercise 2</h3>
        {/* <p id="toggleText">Hello World!</p>
        <button
          onClick={() => {
            if (isVisible) {
              console.log(isVisible);
              document.getElementById("toggleText").style.display = "none";
              setIsVisible(!isVisible);
            } else {
              console.log(isVisible);
              document.getElementById("toggleText").style.display = "block";
              setIsVisible(!isVisible);
            }
          }}
        >
          Toggle Text
        </button> */}

        {isVisible && <p>Hello World!</p>}
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          {isVisible ? "Hide" : "Show"} Text
        </button>
      </div>

      {/* exercise 3 - Input */}
      <div>
        <h3>Exercise 3</h3>
        <input
          type="text"
          value={inputField}
          onChange={(e) => {
            setInputField(e.target.value);
          }}
        />
        <p>Your input: {inputField}</p>
      </div>

      {/* exercise 4 - multi-state management */}
      {/* <div>
        <h3>Exercise 4</h3>
        <MultiStateComponent
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
        />
      </div> <br> */}

      {/* exercise 5 -  */}
      <div>
        <h3>Exercise 5</h3>
        <ul>
          {items.map((item, index) => {
            return (
              <div key={index} className="listItem">
                {/* <li name={index}>
                  {item.name} = {String(item.active)}
                </li> */}
                <p>
                  {item.name ? item.name : "invalid"}:{" "}
                  {item.active ? "Active" : "Inactive"}
                </p>
                <button onClick={() => toggleState(index)}>Toggle</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Usestate;

const MultiStateComponent = (props) => {
  const { username, email, setUsername, setEmail } = props;

  return (
    <div>
      <h3>User details</h3>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        Your Inputs
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
