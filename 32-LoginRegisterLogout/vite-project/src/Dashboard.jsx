// src/pages/Dashboard.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user?.email}</h2>
    </div>
  );
};

export default Dashboard;
