import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';

const AddTask = ({ categoryId }) => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName) {
      dispatch(addTask({ id: Date.now(), name: taskName, categoryId, completed: false }));
      setTaskName('');
    } else {
      alert('Task name cannot be empty');
    }
  };

  return (
    <div>
      <h3>Add Task</h3>
      <input
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
