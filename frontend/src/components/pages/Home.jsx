import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Plant Search App</h1>
            <p>
                This application allows you to search for various plants based on their climate needs. 
                Use the navigation above to explore features such as registration and login.
            </p>
            <h2>Get Started</h2>
            <p>
                You can <Link to="/register">register</Link> a new account or <Link to="/login">login</Link> 
                if you already have an account.
            </p>
        </div>
    );
};

export default Home;
