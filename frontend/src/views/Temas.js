import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Temas() {
    return (
        <div className="container">
            <Navbar /> 

            {/* Contenido Principal */}
            <main className="main-content">
                <h1>Pantalla de Temas</h1>
                <p>Este es el área para mostrar a los estudiantes.</p>
            </main>

            <Footer /> 
        </div>
    );
}

export default Temas;