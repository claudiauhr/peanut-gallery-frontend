import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const ROOT = ReactDOM.createRoot(document.getElementById('root'));

// Build the application with initial logic (if needed)
const build = () => {

    ROOT.render(
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    );
}

// Start the application.
build();