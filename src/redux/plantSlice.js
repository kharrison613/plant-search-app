import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import { fetchPlantsStart, fetchPlantsSuccess, fetchPlantsFailure } from './redux/plantSlice';


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


export const fetchPlants =(climate) => async (dispatch) => {
    dispatch(fetchPlantsStart());
    const url = `https://house-plants.p.rapidapi.com/climate/${climate}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'process.env.REACT_APP_RAPIDAPI_KEY', 
            'x-rapidapi-host': 'house-plants.p.rapidapi.com',
        },
    };


    try {
        const response = await axios.get(url, options);
        dispatch(fetchPlantsSuccess(response.data));
    } catch (error) {
        dispatch(fetchPlantsFailure(error.message));
    }
};

export default plantSlice.reducer;
