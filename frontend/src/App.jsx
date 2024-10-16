import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import plantReducer from "./redux/plantSlice";
import careTipReducer from "./redux/careTipSlice";
import PlantManager from "../src/components/pages/PlantManager";
import CareTipManager from "../src/components/CareTipManager"; 
import Home from "./components/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plants" element={<PlantManager />} />
          <Route path="/care-tips" element={<CareTipManager />} />{" "}
          
          
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
