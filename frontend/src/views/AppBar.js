import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AppBar.css'; // Importa el archivo de estilos CSS

const AppBar = () => {
  return (
    <div className="appbar">
      <Link to="/dashboard" className="appbar-item appbar-item-large">Dashboard</Link>
      <div className="appbar-right">
        <Link to="/temas" className="appbar-item">Temas</Link>
        <Link to="/estudiantes" className="appbar-item">Estudiantes</Link>
      </div>
    </div>
  );
};

export default AppBar;