import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../api'; 
import { fetchPlants } from '../redux/plantSlice'; // Action to fetch plants

const Loading = () => <p>Loading...</p>;

const Error = ({ error }) => (
  <div>
    <p>Error: {error}</p>
    <button onClick={() => window.location.reload()}>Retry</button>
  </div>
);

function PlantList() {
  const dispatch = useDispatch();
  const { plants, loading, error } = useSelector((state) => state.plants);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/plants'); // Call your API here
        dispatch(fetchPlants(response.data)); // Dispatch action to store in Redux
      } catch (error) {
        console.error(error);
        // Handle error here (optional)
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const plantItems = plants.map((plant) => (
    <li key={plant._id}>
      <h2>{plant.CommonName}</h2>
      <p><strong>Scientific Name:</strong> {plant.ScientificName}</p>
      <p><strong>Family:</strong> {plant.Family}</p>
      <p><strong>Genus:</strong> {plant.Genus}</p>
      <p><strong>Species:</strong> {plant.Species}</p>
    </li>
  ));

  return <ul className='plant-list'>{plantItems}</ul>;
}

export default PlantList;
