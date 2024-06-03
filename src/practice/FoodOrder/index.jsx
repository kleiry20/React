import { useState, useEffect } from "react";

const Task = () => {
  const initialTask = {
    id: 0,
    text: "Muesli",
  };

  const [tasks, setTasks] = useState([initialTask]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editTask, setEditTask] = useState("");

  function handleAddTask(newTask) {
    if (newTask) {
      setTasks([...tasks, { id: tasks.length, text: newTask }]);
      setNewTask("");
    }
  }
  // useEffect(() => {
  //   console.log("tasks", tasks);
  // }, [handleAddTask]);

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleEditTask(id) {
    setIsEditing(id);
    const taskToEdit = tasks.find((task) => id === task.id);
    setEditTask(taskToEdit.text);

    console.log("before editing-->", editTask);
  }

  function handleSaveTask(id) {
    const updatedMap = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, text: editTask };
      }
      return task;
    });
    console.log("updated--->", updatedMap);
    setTasks(updatedMap);
    setIsEditing(null);
    setEditTask("");
  }

  return (
    <div>
      <h4> Your Tasks </h4>
      <input
        type="text"
        placeholder="enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={() => handleAddTask(newTask)}>Add</button>

      {tasks.map((task) => (
        <ul style={{ height: "2rem", margin: "1rem" }} key={task.id}>
          <li>
            {isEditing === task.id ? (
              <input
                type="text"
                value={editTask}
                onChange={(e) => {
                  setEditTask(e.target.value);
                }}
              />
            ) : (
              task.text
            )}
            <span style={{ marginLeft: "2rem" }}>
              {isEditing === task.id ? (
                <button onClick={() => handleSaveTask(task.id)}>save</button>
              ) : (
                <button onClick={() => handleEditTask(task.id)}>edit</button>
              )}
              &nbsp;
              <button onClick={() => handleDeleteTask(task.id)}>delete</button>
            </span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Task;
