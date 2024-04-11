import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState(TASKS);
  const [selectedCategory, setselectedCategory] = useState("All");
  const itemDisplayed = task.filter((dt) =>
    selectedCategory === "All" ? dt.category : dt.category === selectedCategory
  );

  const deleteItem = (ItemDeleted) => {
    setTask(task.filter((currentTask) => currentTask.text !== ItemDeleted));
  };

  const addItem = (item) => {
    setTask([...task, item]);
  };
  return (
    <div className='App'>
      <h2>My tasks</h2>
      <CategoryFilter
        changeCategory={setselectedCategory}
        currentCategory={selectedCategory}
        categories={CATEGORIES}
      />
      <NewTaskForm onTaskFormSubmit={addItem} categories={CATEGORIES} />
      <TaskList deleteItem={deleteItem} tasks={itemDisplayed} />
    </div>
  );
}

export default App;
