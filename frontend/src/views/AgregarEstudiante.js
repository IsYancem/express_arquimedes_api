import React from 'react';
import AppBar from './AppBar';
import '../styles/AgregarEstudiante.css';

const AgregarEstudiante = () => {
  return (
    <div className="agregar-estudiante">
      <AppBar />
      <h1>Crear Estudiante</h1> {/* Movido arriba del formulario */}
      <div className="form-container">
        <form>
          <label>
            Nombre:
            <input type="text" name="name" />
          </label>
          <label>
            Apellido:
            <input type="text" name="lastname" />
          </label>
          <label>
            Usuario:
            <input type="text" name="username" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <div className="button-container">
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarEstudiante;