import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', { username, password });
            localStorage.setItem('authToken', response.data.token);
            alert('Logged in successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to log in');
        }
    };

    return (
        <div className="login-container">
            {/* Logo */}
            <div className="logo">🌱</div>

            {/* Welcome Text */}
            <h2>Welcome Back!</h2>
            <p>Please log in to continue</p>

            {/* Form */}
            <form onSubmit={handleLogin}>
                {/* Username Input */}
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Username or Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Forgot Password Link */}
                <div className="forgot-password">
                    <a href="/forgot-password">Forgot Password?</a>
                </div>

                {/* Submit Button */}
                <button type="submit" className="login-button">Log In</button>

                {/* Register Link */}
                <div className="register-link">
                    <p>Don't have an account? <a href="/register">Register here</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
