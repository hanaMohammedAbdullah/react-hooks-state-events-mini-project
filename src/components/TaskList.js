import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteItem }) {
  return (
    <div className='tasks'>
      {/* display a list of tasks using Task component */}
      {tasks.length > 0 ? (
        tasks?.map((task) => (
          <Task
            deleteItem={deleteItem}
            key={task.text}
            text={task.text}
            category={task.category}
          />
        ))
      ) : (
        <h1>No tasks yet</h1>
      )}
    </div>
  );
}

export default TaskList;
