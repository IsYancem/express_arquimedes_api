import React from 'react';
import AppBar from './AppBar'; // Importa el componente AppBar
import '../styles/Estudiantes.css';

const Estudiantes = () => {
  return (
    <div className="estudiantes">
      <AppBar /> 
      <div className="body">
        <p>Hola Estudiantes</p>
      </div>
    </div>
  );
};

export default Estudiantes;