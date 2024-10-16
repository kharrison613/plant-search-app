import React from 'react';
import { useSelector } from 'react-redux';

// Standard JavaScript function syntax and variable declaration
function PlantList() {
  var plantsState = useSelector(function(state) { return state.plants; });
  var plants = plantsState.plants;
  var loading = plantsState.loading;
  var error = plantsState.error;

  if (loading) return React.createElement('p', null, 'Loading...');
  if (error) return React.createElement(
    'div',
    null,
    React.createElement('p', null, 'Error: ' + error),
    React.createElement('button', { onClick: function() { window.location.reload(); } }, 'Retry')
  );

  return React.createElement(
    'ul',
    { className: 'plant-list' },
    plants.map(function(plant) {
      return React.createElement(
        'li',
        { key: plant._id },
        React.createElement('h2', null, plant.CommonName),
        React.createElement('p', null, React.createElement('strong', null, 'Scientific Name: '), plant.ScientificName),
        React.createElement('p', null, React.createElement('strong', null, 'Family: '), plant.Family),
        React.createElement('p', null, React.createElement('strong', null, 'Genus: '), plant.Genus),
        React.createElement('p', null, React.createElement('strong', null, 'Species: '), plant.Species)
      );
    })
  );
}

export default PlantList;
