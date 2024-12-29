import React, { useRef } from "react";

function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  const inputRef = useRef(null);

  const handleEdit = () => {
    const newName = inputRef.current.value;
    editTask(task.id, newName);
  };

  return (
    <li className="task-item">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <input
          ref={inputRef}
          type="text"
          defaultValue={task.name}
          onBlur={handleEdit}
          disabled={task.completed}
        />
      </div>
      {task.completed && (
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      )}
    </li>
  );
}

function TaskList({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
