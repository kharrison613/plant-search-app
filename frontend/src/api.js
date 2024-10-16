import axios from 'axios';

export const getPlants = async () => {
  const response = await axios.get('/api/plants'); // Check this URL
  return response.data;
};
