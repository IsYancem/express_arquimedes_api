import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MisDatos = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/tu_endpoint');
        setDatos(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Datos Obtenidos</h1>
      <ul>
        {datos.map(dato => (
          <li key={dato.id}>{dato.nombre}</li> // Asume que tus datos tienen 'id' y 'nombre'
        ))}
      </ul>
    </div>
  );
};

export default MisDatos;
