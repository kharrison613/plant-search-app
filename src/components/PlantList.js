// src/components/PlantList.js
import React from 'react';
import { useSelector } from 'react-redux';
import PlantCard from './PlantCard';

const PlantList = () => {
  const plants = useSelector((state) => state.plants.items);

  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
};

export default PlantList;
