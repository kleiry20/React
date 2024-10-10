import { useEffect, useState } from "react";
import "../../index.css";

const CheckPalindrome = () => {
  //   const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [isPalin, setIsPalin] = useState(false);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);

  const [timer, setTimer] = useState(null);

  //   function handleClick() {
  //     setCount(count + 1);
  //     // setTimeout(() => nextFunc(), 1000);
  //   }

  //   function nextFunc() {
  //     console.log("new value", count);
  //   }

  //   useEffect(() => nextFunc(), [count]);
  //   axios interceptor

  // Implement following behaviour:
  // user will enter a text in input
  // click submit -> function
  // It will read input value and check if it is palindrome
  // Yes - show a green box in center of page
  // No - show a red box in center of page

  function handleSearch(e) {
    setInput(e.target.value);
    if (timer) {
      clearInterval(timer);
    }

    const interval = setInterval(() => {
      console.log("timeer", input);
    }, 3000);
    setTimer(interval);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input, "input val");

    let reverseStr = "";
    for (let i = input.length - 1; i >= 0; i--) {
      reverseStr = reverseStr + input[i];
    }
    console.log(reverseStr, "rev");
    if (reverseStr === input) {
      setIsPalin(true);
    } else {
      setIsPalin(false);
    }
    setIsSearchCompleted(true);
  }
  return (
    <div className="parent">
      {/* Assignment
      <p>Count: {count}</p>
      <button onClick={handleClick}>add</button> */}
      <form className="form" onSubmit={handleSubmit}>
        <h3>Check Palindrome</h3>
        <input
          type="text"
          onChange={(e) => {
            // setInput(e.target.value);
            handleSearch(e);
          }}
          value={input}
        />
        <button type="submit">submit</button>
      </form>

      {isSearchCompleted ? (
        isPalin ? (
          <div className="true centered-div">Yes</div>
        ) : (
          <div className="false centered-div">No</div>
        )
      ) : null}
    </div>
  );
};

export default CheckPalindrome;
