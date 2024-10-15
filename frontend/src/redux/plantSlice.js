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


export const fetchPlants =(climate) => async (dispatch) => {
    dispatch(fetchPlantsStart());
    const options = {
        method: 'GET',
        url: 'https://plants2.p.rapidapi.com/api/plants',
        params: {CN: climate},
        headers: {
          'x-rapidapi-key': 'c312149a8cmsh4bb3256c083b9e0p12ee10jsn4240ffbe7b48',
          'x-rapidapi-host': 'plants2.p.rapidapi.com',
          Authorization: 'GKZOHNZj0xP65kk0BAE2Tl9LGagm0pfD3DFNxAEEZcMQBhRZVDco8vbNJdnwwCo0'
        }
      };
      
      try {
          const response = await axios.request(options);
        dispatch(fetchPlantsSuccess(response.data));
    } catch (error) {
        console.log(error);
        dispatch(fetchPlantsFailure(error.message));
    }
};

export default plantSlice.reducer;
