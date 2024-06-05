// src/Components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    authenticated: boolean,
    children: JSX.Element
}
const ProtectedRoute = ({ authenticated, children }: ProtectedRouteProps) => {
 

  if (!authenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the children components if authenticated
  return children;
};

export default ProtectedRoute;
