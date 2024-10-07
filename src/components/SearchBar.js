// src/components/SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPlants } from '../redux/plantSlice';

const SearchBar = () => {
    const [climate, setClimate] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (climate) {
            dispatch(fetchPlants(climate));
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Tropical..."
                value={climate}
                onChange={(e) => setClimate(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
