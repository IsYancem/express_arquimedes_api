import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Estudiantes() {
  return (
    <div className="container">
      {/* Barra de Navegación */}
      <Navbar /> {/* Utiliza el componente Navbar aquí */}

      {/* Contenido Principal */}
      <main className="main-content">
        <h1>Pantalla de Estudiantes</h1>
        <p>Este es el área para mostrar a los estudiantes.</p>
      </main>

      {/* Pie de Página (Opcional) */}
      <Footer /> {/* Utiliza el componente Footer aquí */}
    </div>
  );
}

export default Estudiantes;