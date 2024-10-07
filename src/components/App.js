import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import plantReducer from '../redux/plantSlice';
import SearchBar from './SearchBar';
import PlantList from './PlantList';

const store = configureStore({
    reducer: {
        plants: plantReducer,
    },
});
// process.env.REACT_APP_RAPIDAPI_KEY
// console.log(process.env.REACT_APP_RAPIDAPI_KEY)
const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <h1>Plant Search App</h1>
                <SearchBar />
                <PlantList />
            </div>
        </Provider>
    );
};

export default App;
