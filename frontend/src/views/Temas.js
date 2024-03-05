import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faStickyNote } from '@fortawesome/free-solid-svg-icons'; // Agregado el icono de la nota
import AppBar from './AppBar';
import '../styles/Temas.css';

const Temas = () => {
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    const fetchTemas = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/temas');
        if (response.ok) {
          const data = await response.json();
          setTemas(data);
        } else {
          console.error('Error al obtener temas:', response.statusText);
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    };

    fetchTemas();
  }, []);

  const handleEdit = (id) => {
    // Lógica para la edición del tema con el ID específico
    console.log('Editar tema con ID:', id);
  };

  const handleDelete = (id) => {
    // Lógica para eliminar el tema con el ID específico
    console.log('Eliminar tema con ID:', id);
  };

  return (
    <div className="temas">
      <AppBar />
      <div className="content"> 
        <h1 style={{ textAlign: 'center' }}>Lista de Temas</h1> {/* Centrado el texto */}
        <button className="note-button">
          <FontAwesomeIcon icon={faStickyNote} />
          Nota
        </button>
        <table className="temas-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre del Tema</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {temas.map((tema) => (
              <tr key={tema.id}>
                <td>{tema.id}</td>
                <td>{tema.nombre_tema}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="edit-icon"
                    onClick={() => handleEdit(tema.id)}
                  />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="delete-icon"
                    onClick={() => handleDelete(tema.id)}
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

export default Temas;