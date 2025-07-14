import React, { useState } from "react";

const TaskInput = ({ task, setTask, onSubmit }) => {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError(true);
      return;
    }

    onSubmit();
    setError(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto mb-6 flex gap-2"
    >
      <input
        type="text"
        name="task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
          if (error) setError(false);
        }}
        placeholder="Enter your Todo?"
        className={`flex-1 px-4 py-2 rounded-xl border shadow-sm transition-all ${
          error
            ? "border-red-500 ring-2 ring-red-400 animate-shake"
            : "border-gray-400 focus:ring-2 focus:ring-gray-600"
        }`}
      />
      <button
        type="submit"
        className={`px-5 py-2.5 rounded-xl text-white transition-colors ${
          !task.trim()
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-800"
        }`}
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
