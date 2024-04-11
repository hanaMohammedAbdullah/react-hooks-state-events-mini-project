import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [newItem, setNewItem] = useState({
    text: "",
    category: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(newItem);
  };

  const fieldHandler = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  return (
    <form className='new-task-form' onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type='text'
          name='text'
          value={newItem.text}
          onChange={(e) => fieldHandler(e)}
        />
      </label>
      <label>
        Category
        <select
          value={newItem.category}
          name='category'
          onChange={(e) => fieldHandler(e)}>
          {/* render <option> elements for each category here */}
          {categories.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
      </label>
      <input type='submit' value='Add task' />
    </form>
  );
}

export default NewTaskForm;
