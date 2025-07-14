import React, { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Drink Water",
      completed: true,
    },
    {
      id: 2,
      title: "Apply Intern in Verlynk",
      completed: false,
    },
  ]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleToggleCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const getFilteredTasks = () => {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="w-full max-w-md mx-auto px-4 mt-8">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 animate-fade-bounce border-b-2 border-blue-600 inline-block pb-1">
        📝 Task Manager
      </h1>

      <TaskInput task={task} setTask={setTask} onSubmit={handleAddTask} />

      <div className="flex justify-center gap-2 mb-4 text-sm font-medium">
        {["all", "active", "completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded-full border-2 hover:border-black text-lg ${
              filter === type
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            setcompleted={handleToggleCompleted}
            setIsDeleted={handleDeleteTask}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No tasks to show.</p>
      )}
    </div>
  );
};

export default TaskList;
