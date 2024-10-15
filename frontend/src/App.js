// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
