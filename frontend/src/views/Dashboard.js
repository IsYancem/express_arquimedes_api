import React from 'react';
import '../styles/Dashboard.css'; 
import Navbar from './Navbar'; 
import Footer from './Footer'; // Importa el componente Footer

function Dashboard() {
  return (
    <div className="container">
      {/* Barra de Navegación */}
      <Navbar /> {/* Utiliza el componente Navbar aquí */}
      
      {/* Contenido Principal */}
      <main className="main-content">
        <h1>Bienvenido al Dashboard</h1>
        {/* Aquí puedes agregar más contenido, como tablas, gráficos, etc. */}
        <p>Este es el área principal de tu dashboard. Aquí puedes mostrar información relevante para el usuario, como estadísticas, gráficos, o cualquier otra información importante.</p>
      </main>
      
      {/* Pie de Página (Opcional) */}
      <Footer /> {/* Utiliza el componente Footer aquí */}
    </div>
  );
}

export default Dashboard;