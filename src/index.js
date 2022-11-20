import React from "react";
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import {FeedbackProvider} from "./context/FeedbackContext";
import Header from "./components/Header/Header";
import Home from './pages/Home';
import AboutPage from "./pages/AboutPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <FeedbackProvider><Header/><Home /></FeedbackProvider>
    },
    {
        path: '/about',
        element: <FeedbackProvider><Header /><AboutPage /></FeedbackProvider>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <React.StrictMode>
           <RouterProvider router={router} />
        </React.StrictMode>
)
