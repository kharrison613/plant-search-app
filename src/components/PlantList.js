import React from 'react';

const PlantList = ({ data }) => {
  // Check if data is loaded
  if (!data) {
    return <div>Loading...</div>; // Loading state
  }

  // Handle case where there's no data
  if (data.length === 0) {
    return <div>No plants found.</div>;
  }

  return (
    <div className="plant-list">
      {data.map((plant) => (
        <div key={plant.id} className="plant-item">
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          {/* You can display more plant details here */}
        </div>
      ))}
    </div>
  );
};

export default PlantList;
