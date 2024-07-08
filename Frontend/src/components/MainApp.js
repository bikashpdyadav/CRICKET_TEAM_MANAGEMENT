// src/components/MainApp.js
import React from 'react';
import { useAuth } from './AuthContext';
import { Outlet, Navigate } from 'react-router-dom';

const MainApp = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default MainApp;
