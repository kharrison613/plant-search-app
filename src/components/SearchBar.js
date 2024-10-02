import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPlants } from '../features/plantsSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchPlants(query));
    setQuery('');
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for plants..."
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBar;