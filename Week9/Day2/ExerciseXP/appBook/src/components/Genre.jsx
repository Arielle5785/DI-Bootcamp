

import React from 'react';
import { GENRES } from '../redux/constants';

const GenreDropdown = ({ value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select a Genre</option>
      {GENRES.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};

export default GenreDropdown;

