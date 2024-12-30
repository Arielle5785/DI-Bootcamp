import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div>
      <h1>Progress Management</h1>
      <p>Select a category, then enter the task.</p>
      <CategorySelector
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory} />
      {selectedCategory && <AddTask categoryId={selectedCategory} />}
      {selectedCategory && <TaskList categoryId={selectedCategory} />}
    </div>
  );
};

export default App;
