import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    return savedTasks || [];
  });
  const [datetime, setDatetime] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: new Date().getTime(),
      content: inputValue,
      checked: false,
    };

    const taskExists = tasks.find((task) => task.content === inputValue);
    if (taskExists) return;

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputValue("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDatetime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const toggleCheck = (taskToToggle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskToToggle.id ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <h2 className="date">{datetime}</h2>
        </header>

        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              onChange={(event) => handleInputChange(event.target.value)}
              value={inputValue}
            />
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </form>
        </section>

        <section className="List">
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className={task.checked ? "checked" : ""}>
                <span>{task.content}</span>
                <button className="check" onClick={() => toggleCheck(task)}>
                  <FaCheck />
                </button>
                <button className="delete" onClick={() => deleteTask(task)}>
                  <MdDelete />
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <button className="clear-btn" onClick={clearTasks}>
            Clear All
          </button>
        </section>
      </section>






      
    </>
  );
};
