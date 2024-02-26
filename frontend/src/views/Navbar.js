import React, { useState } from 'react';
import { FaBars, FaPowerOff } from 'react-icons/fa'; // Importa el ícono de apagado
import '../styles/Navbar.css';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Cambia el h2 por un Link */}
      <Link to="/dashboard" className="navbar-brand">
        Dashboard
      </Link>
      <div className="menu-icon" onClick={toggleNavbar}>
        <FaBars />
      </div>
      <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        {/* Enlaces a las nuevas pantallas */}
        <li><Link to="/temas">Temas</Link></li>
        <li><Link to="/estudiantes">Estudiantes</Link></li>
        <li><Link to="/"><FaPowerOff /></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;