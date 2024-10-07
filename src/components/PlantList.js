// src/components/PlantList.js
import React from 'react';
import { useSelector } from 'react-redux';

const PlantList = () => {
    const { plants, loading, error } = useSelector((state) => state.plants);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul className="plant-list">
            {plants.map((plant) => (
                <li key={plant.id}>
                    <h2>{plant.name}</h2>
                    <p>{plant.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default PlantList;
