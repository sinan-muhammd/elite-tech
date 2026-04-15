import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const userRole = localStorage.getItem("userRole");

    // Allow both 'user' and 'admin' (or any authenticated role)
    if (!userRole) {
        // If not logged in, redirect to login
        return <Navigate to="/login" replace />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
