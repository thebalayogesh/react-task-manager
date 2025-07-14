# 📝 Task Manager

## A Minimalistic Task Manager built using "**_React_** " and "**_Tailwind CSS_** ".

> ### This project is made as part of an intern-level React assignment for **_Verlynk_**.

---

## Features

- ✅ Add new tasks with a simple input box
- 🗂️ View all tasks
- ✔️ Mark tasks as completed using a checkbox
- ❌ Delete tasks when no longer needed
- 🔍 Filter tasks:
  - All
  - Active
  - Completed
- ✨ Input validation with shake animation on empty submission
- 🎯 Focused on core React concepts — no backend involved

---

## Technologies Used

| Technology       | Why It’s Used                              |
| ---------------- | ------------------------------------------ |
| **React**        | State management and Conditional rendering |
| **Tailwind CSS** | styling and responsiveness                 |

---

## Project Flow

```
TaskList - Main Page

├── useState: tasks[], taskInput, filter
├── TaskInput
│ └── User types + submits task ➝ calls handleAddTask
│
├── TaskItem
│ ├── Checkbox
│ ├── Title (todo)
│ └── Delete button
│
└── Filter Buttons
├── All - (Show all)
├── Active - Show incomplete
└── Completed - Show completed
```

---

## How to Run this Project

```
git clone https://github.com/thebalayogesh/react-task-manager.git
cd react-task-manager
npm install
npm run dev
```

---
