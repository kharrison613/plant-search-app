// frontend/src/redux/careTipSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const careTipSlice = createSlice({
    name: 'careTips',
    initialState: {
        careTips: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchCareTipsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchCareTipsSuccess: (state, action) => {
            state.careTips = action.payload;
            state.loading = false;
        },
        fetchCareTipsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addCareTipSuccess: (state, action) => {
            state.careTips.push(action.payload);
        },
        updateCareTipSuccess: (state, action) => {
            const index = state.careTips.findIndex(tip => tip._id === action.payload._id);
            if (index !== -1) state.careTips[index] = action.payload;
        },
        deleteCareTipSuccess: (state, action) => {
            state.careTips = state.careTips.filter(tip => tip._id !== action.payload);
        },
    },
});

export const { 
    fetchCareTipsStart, fetchCareTipsSuccess, fetchCareTipsFailure,
    addCareTipSuccess, updateCareTipSuccess, deleteCareTipSuccess 
} = careTipSlice.actions;

export const fetchCareTips = () => async (dispatch) => {
    dispatch(fetchCareTipsStart());
    try {
        const response = await axios.get('/api/caretips');
        dispatch(fetchCareTipsSuccess(response.data));
    } catch (error) {
        dispatch(fetchCareTipsFailure(error.message));
    }
};

export const addCareTip = (newCareTip) => async (dispatch) => {
    try {
        const response = await axios.post('/api/caretips', newCareTip);
        dispatch(addCareTipSuccess(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const updateCareTip = (id, updatedCareTip) => async (dispatch) => {
    try {
        const response = await axios.put(`/api/caretips/${id}`, updatedCareTip);
        dispatch(updateCareTipSuccess(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const deleteCareTip = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/caretips/${id}`);
        dispatch(deleteCareTipSuccess(id));
    } catch (error) {
        console.error(error);
    }
};

export default careTipSlice.reducer;
