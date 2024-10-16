// frontend/src/App.jsx
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import plantReducer from "./redux/plantSlice";
import careTipReducer from "./redux/careTipSlice";
import PlantManager from "./components/pages/PlantManager";
import CareTipManager from "./components/CareTipManager"; 
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Navbar from './components/Navbar'; // Import Navbar component
import './components/Navbar.css';

// Configure the Redux store
const store = configureStore({
  reducer: {
    plants: plantReducer,
    careTips: careTipReducer, 
  },
});

// Main App component
const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Navbar /> {/* Navbar here to make it persistent across all routes */}

        <div className="app">
          {/* <Navbar /> Navbar here to make it persistent across all routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/plants" element={<PlantManager />} />
            <Route path="/care-tips" element={<CareTipManager />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
