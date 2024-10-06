import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import SearchBar from './components/SearchBar';
import PlantList from './components/PlantList';
import './styles/App.css';

const App = () => {
  const [data, setData] = useState(null);
  const url = 'https://house-plants.p.rapidapi.com/climate/Tropical';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'your-api-key', // Replace with your actual API key
      'x-rapidapi-host': 'house-plants.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const result = await response.json();
        console.log(result);
        setData(result); 
      } catch (error) {
        console.error('Fetch error: ', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Plant Search</h1>
        <SearchBar />
        <PlantList data={data} />
      </div>
    </Provider>
  );
};

export default App;
