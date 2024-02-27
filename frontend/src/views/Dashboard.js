import React from 'react';
import '../styles/Dashboard.css'; 
import Navbar from './Navbar'; 
import Footer from './Footer'; // Importa el componente Footer

function Dashboard() {
  return (
    <div className="container">
      <Navbar /> 
      
      <main className="main-content">
        <button className="add-button">+</button>
        <h1>Bienvenido al Dashboard</h1>
        <p>Este es el área principal de tu dashboard. Aquí puedes mostrar información relevante para el usuario, como estadísticas, gráficos, o cualquier otra información importante.</p>
      </main>
      
      <Footer /> 
    </div>
  );
}

export default Dashboard;