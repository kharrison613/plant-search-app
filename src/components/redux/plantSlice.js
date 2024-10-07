// src/redux/plantSlice.js
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
    },
});

export const { fetchPlantsStart, fetchPlantsSuccess, fetchPlantsFailure } = plantSlice.actions;

export const fetchPlants = (searchTerm) => async (dispatch) => {
    dispatch(fetchPlantsStart());
    try {
        const response = await axios.get(`'https://house-plants.p.rapidapi.com/climate/Tropical'?=${searchTerm}`);
        dispatch(fetchPlantsSuccess(response.data));
    } catch (error) {
        dispatch(fetchPlantsFailure(error.message));
    }
};

export default plantSlice.reducer;
