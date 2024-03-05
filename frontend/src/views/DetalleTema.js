// DetalleTema.js
import React from 'react';
import AppBar from './AppBar';
import '../styles/DetalleTema.css';

const DetalleTema = ({ tema }) => {
  return (
    <div className="detalle-tema">
      <AppBar />
      <div className="content">
        <h1>Detalles del Tema</h1>
        <p>ID: {tema.id}</p>
        <p>Nombre del Tema: {tema.nombre_tema}</p>
        <h2>Explicaciones</h2>
        <ul>
          {tema.tb_explicacion.map((explicacion) => (
            <li key={explicacion.id}>
              <h3>Teoría {explicacion.id}</h3>
              <p>{explicacion.teoria_1}</p>
              <p>{explicacion.teoria_2}</p>
              <p>{explicacion.teoria_3}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetalleTema;