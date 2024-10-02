import React from 'react';

const PlantCard = ({ plant }) => {
  return (
    <div className="plant-card">
      <h3>{plant.name}</h3>
      <p>{plant.care}</p>
    </div>
  );
};

export default PlantCard;
