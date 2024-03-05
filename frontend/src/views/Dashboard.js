import React from 'react';
import AppBar from './AppBar'; // Importa el componente AppBar
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <AppBar /> {/* Utiliza el componente AppBar aquí */}
      <div className="body">
        {/* Contenido del dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;