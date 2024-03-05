import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import AppBar from './AppBar'; 
import '../styles/Estudiantes.css';

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    const fetchEstudiantes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/usersNotDocente');
        if (response.ok) {
          const data = await response.json();
          setEstudiantes(data);
        } else {
          console.error('Error al obtener estudiantes:', response.statusText);
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    };

    fetchEstudiantes();
  }, []);

  const handleEdit = (index) => {
    // Lógica para la edición del estudiante en el índice específico
    console.log('Editar estudiante en el índice:', index);
  };

  const handleDelete = (index) => {
    // Lógica para eliminar el estudiante en el índice específico
    console.log('Eliminar estudiante en el índice:', index);
  };

  return (
    <div className="estudiantes">
      <AppBar />
      <div className="body">
        <h1>Lista de Estudiantes</h1>
        <Link to="/agregarEstudiante" className="add-button">
          <FontAwesomeIcon icon={faUserPlus} />
          Agregar
        </Link>
        <table className="estudiantes-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Usuario</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((estudiante, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{estudiante.name}</td>
                <td>{estudiante.lastname}</td>
                <td>{estudiante.username}</td>
                <td>{estudiante.email}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="edit-icon"
                    onClick={() => handleEdit(index)}
                  />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="delete-icon"
                    onClick={() => handleDelete(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Estudiantes;