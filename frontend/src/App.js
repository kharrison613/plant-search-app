import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import plantReducer from "./redux/plantSlice";
import careTipReducer from "./redux/careTipSlice"; // Import care tip reducer
import PlantManager from "./components/PlantManager";
import CareTipManager from "./components/CareTipManager"; // Import care tip manager
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

// Configure the Redux store
const store = configureStore({
  reducer: {
    plants: plantReducer,
    careTips: careTipReducer, // Add care tip reducer
  },
});

// Main App component
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plants" element={<PlantManager />} />
          <Route path="/care-tips" element={<CareTipManager />} />{" "}
          {/* Add care tip route */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
