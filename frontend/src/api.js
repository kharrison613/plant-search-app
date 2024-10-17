// src/api/api.js

import axios from 'axios';

// Load the API URL and key from environment variables
const API_URL = process.env.REACT_APP_PLANT_API_URL;
const API_KEY = process.env.REACT_APP_PLANT_API_KEY;

// Function to fetch plants
export const fetchPlants = async () => {
    try {
        const response = await axios.get(`${API_URL}/plants`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching plants:', error);
        throw error; // Rethrow the error to handle it in the component
    }
};

// Function to create a plant
export const createPlant = async (plantData) => {
    try {
        const response = await axios.post(`${API_URL}/plants`, plantData, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating plant:', error);
        throw error; // Rethrow the error to handle it in the component
    }
};


export default { fetchPlants, createPlant };