import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPlants = createAsyncThunk('plants/fetchPlants', async (query) => {
  const response = await fetch(`'c312149a8cmsh4bb3256c083b9e0p12ee10jsn4240ffbe7b48'${query}`);
  return response.json();
});

const plantsSlice = createSlice({
  name: 'plants',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      });
  },
});

export default plantsSlice.reducer;
