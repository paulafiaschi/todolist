import { useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Clean stuff",
      completed: false,
    },
    {
      id: 2,
      task: "Pick up the kids",
      completed: true,
    },
  ]);
  function deleteItem(id) {
    setTasks((oldState) => oldState.filter((item) => item.id !== id));
  }
  function submit(e) {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      task: e.target.elements.name.value, //"e.target"=form, "elements.name.value"=input text of Name field
      completed: false,
    };
    setTasks((oldState) => oldState.concat(newTask));
  }

  return (
    <div id="App">
      <form onSubmit={submit}>
        <label htmlFor="name">Task</label>
        <input requiredtype="text" id="name" name="task" />
        <button>Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <ListItem deleteItem={deleteItem} {...task} />
        ))}
      </ul>
    </div>
  );
}
