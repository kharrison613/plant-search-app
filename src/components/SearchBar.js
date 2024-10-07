// src/components/SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPlants } from '../redux/plantSlice';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (searchTerm) {
            dispatch(fetchPlants(searchTerm));
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for plants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
