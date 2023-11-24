// src/components/ProtectedComponent.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout } from '../store/actions/authActions';

const ProtectedComponent: React.FC = () => {
  const token = useSelector((state: any) => state.auth.token);
  const dispatch = useDispatch();

  if (!token) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <p>Protected Content</p>
      <button type="button" onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default ProtectedComponent;
