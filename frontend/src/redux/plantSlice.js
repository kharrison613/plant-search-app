import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const plantSlice = createSlice({
    name: 'plants',
    initialState: {
        plants: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchPlantsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchPlantsSuccess: (state, action) => {
            state.plants = action.payload;
            state.loading = false;
        },
        fetchPlantsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addPlantSuccess: (state, action) => {
            state.plants.push(action.payload);
        },
        updatePlantSuccess: (state, action) => {
            const index = state.plants.findIndex(plant => plant._id === action.payload._id);
            if (index !== -1) state.plants[index] = action.payload;
        },
        deletePlantSuccess: (state, action) => {
            state.plants = state.plants.filter(plant => plant._id !== action.payload);
        },
    },
});

export const { 
    fetchPlantsStart, fetchPlantsSuccess, fetchPlantsFailure,
    addPlantSuccess, updatePlantSuccess, deletePlantSuccess 
} = plantSlice.actions;

export const fetchPlants = () => async (dispatch) => {
    dispatch(fetchPlantsStart());
    try {
        const response = await axios.get('/api/plants');
        dispatch(fetchPlantsSuccess(response.data));
    } catch (error) {
        dispatch(fetchPlantsFailure(error.message));
    }
};

export const addPlant = (newPlant) => async (dispatch) => {
    try {
        const response = await axios.post('/api/plants', newPlant);
        dispatch(addPlantSuccess(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const updatePlant = (id, updatedPlant) => async (dispatch) => {
    try {
        const response = await axios.put(`/api/plants/${id}`, updatedPlant);
        dispatch(updatePlantSuccess(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const deletePlant = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/plants/${id}`);
        dispatch(deletePlantSuccess(id));
    } catch (error) {
        console.error(error);
    }
};

export default plantSlice.reducer;
