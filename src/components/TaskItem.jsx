import React from "react";

const TaskItem = ({ title, completed, id, setcompleted, setIsDeleted }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-gray-200 shadow-sm rounded-xl mb-3 p-4 flex items-center justify-between border-b-4 hover:bg-gray-50 hover:border-b-gray-400 transition-all border-b-transparent">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setcompleted(id)}
        className="w-5 h-5 cursor-pointer"
      />
      <h3
        className={`text-xl text-left pl-3 capitalize font-medium flex-1 ${
          completed ? "line-through text-gray-500" : ""
        }`}
      >
        {title}
      </h3>
      <button
        onClick={() => setIsDeleted(id)}
        className="text-gray-500 hover:text-red-600"
      >
        🗑️
      </button>
    </div>
  );
};

export default TaskItem;
