import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import plantReducer from '../redux/plantSlice'; 
import SearchBar from './components/SearchBar'; 
import PlantList from './components/PlantList'; 
import Register from './components/Register'; 
import Login from './components/Login'; 
import Home from './components/Home'; 

const store = configureStore({
    reducer: {
        plants: plantReducer,
    },
});

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <nav>
                    <a href="/">Home</a>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Home />} />

                     <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <SearchBar />
                <PlantList />
            </Router>
        </Provider>
    );
};

export default App;
