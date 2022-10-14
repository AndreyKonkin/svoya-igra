import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ children, isAllowed }) {
  if (!isAllowed) {
    return <Navigate to="/login" replace />;
  }
  return children || <Outlet />;
}
