import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <div className="appbar">
      <Link to="/" className="appbar-item">Dashboard</Link>
      <Link to="/temas" className="appbar-item">Temas</Link>
      <Link to="/estudiantes" className="appbar-item">Estudiantes</Link>
    </div>
  );
};

export default AppBar;