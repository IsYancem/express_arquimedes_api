import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Tema.css';

function Tema() {
    const [temas, setTemas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarTemas = async () => {
            const respuesta = await fetch('http://localhost:3000/api/temas');
            const temasDesdeAPI = await respuesta.json();
            setTemas(temasDesdeAPI);
        };

        cargarTemas();
    }, []);

    return (
        <div className="container"> 
            <Navbar />
            <main className="main-content">
                <h1>Temas</h1>
                {temas.map(tema => (
                    <button key={tema.id} onClick={() => navigate(`/tema/${tema.id}`)}>
                        {tema.nombre_tema} <i className="fas fa-arrow-right"></i>
                    </button>
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default Tema;