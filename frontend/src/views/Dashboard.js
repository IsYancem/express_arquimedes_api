import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="appbar">
        <Link to="/" className="appbar-item">Dashboard</Link>
        <Link to="/temas" className="appbar-item">Temas</Link>
        <Link to="/estudiantes" className="appbar-item">Estudiantes</Link>
      </div>
      <div className="body">
        {/* Contenido del dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;