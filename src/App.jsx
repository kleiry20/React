import List from "./components/List/List";
import UserGreeting from "./components/UserGreeting/UserGreeting";
import Assignment from "./practice/CRUD/Assignment";
import { Crud } from "./practice/CRUD/Crud";
import Task from "./practice/FoodOrder";
import StateManagement from "./practice/stateManagement";
import Effect from "./practice/useeffect";
import Usestate from "./practice/usestate";
import PropsTut from "./props/PropsTut";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      {/* <h3 className="learn">Learn React</h3> */}

      {/* 02 - props example */}
      {/* <PropsTut /> */}

      {/* 03 - conditional rendering */}
      {/* <UserGreeting isLoggedIn={false} username="SpongeBob" />
      <UserGreeting isLoggedIn={true} /> */}

      {/* 04 - Rendering Lists */}
      {/* {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )} */}

      {/* <Usestate />
      <Effect /> */}

      {/* <StateManagement /> */}

      {/* <Task /> */}

      {/* <Crud /> */}
      <Assignment/>
    </>
  );
}

export default App;
