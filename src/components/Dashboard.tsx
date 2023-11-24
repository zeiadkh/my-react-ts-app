// src/components/Dashboard.tsx

import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard: React.FC = () => {
   
        const token = useSelector((state: any) => state.auth.token);
    if (token) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" />;
      }
  return (
    <div className='m-4 p-4 '>
      <h1>Task Dashboard</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Dashboard;
