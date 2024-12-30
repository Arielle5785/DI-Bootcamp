import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory } from '../redux/selectors';
import { updateTaskProgress, editTask, deleteTask } from '../redux/action';

const TaskList = ({ categoryId }) => {
  const tasks = useSelector(selectTasksByCategory(categoryId));
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState('');

  const handleUpdateProgress = (id, completed) => {
    dispatch(updateTaskProgress(id, completed));
  };

  const handleEdit = 
    (task) => {
      dispatch(editTask(task));
      setEditingTask('');
    };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  
  return (
    <div>
      <h3>Tasks</h3>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() =>  handleUpdateProgress(task.id, !task.completed)}
          />
          {editingTask?.id === task.id ? (
            <input
              value={editingTask.name}
              onChange={(e) => setEditingTask({ ...editingTask, name: e.target.value })}
              onBlur={() => handleEdit(editingTask)}
            />
          ) : (
            <span onClick={() => setEditingTask(task)}>{task.name}</span>
          )}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
