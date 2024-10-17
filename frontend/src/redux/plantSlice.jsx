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
        addPlant: (state, action) => {
            state.plants.push(action.payload); // Add new plant to the state
        },
    },
});

export const { fetchPlantsStart, fetchPlantsSuccess, fetchPlantsFailure, addPlant } = plantSlice.actions;

export default plantSlice.reducer;
