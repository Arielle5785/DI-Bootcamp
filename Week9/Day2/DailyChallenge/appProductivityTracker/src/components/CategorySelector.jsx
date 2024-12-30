import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/selectors';

const CategorySelector = ({ selectedCategory, onCategoryChange }) => {
  const categories = useSelector(selectCategories);

  return (
    <select value={selectedCategory} onChange={(e) => onCategoryChange(Number(e.target.value))}>
      <option value="">Select a Category</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
