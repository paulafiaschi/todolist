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

  return (
    <div id="App">
      <form action="">
        <label htmlFor="name">Task</label>
        <input type="text" id="name" name="task" />
        <button>Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <ListItem {...task} />
        ))}
      </ul>
    </div>
  );
}
