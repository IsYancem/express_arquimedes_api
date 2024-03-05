import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const requestBody = {
      usernameOrEmail: username,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log('Inicio de sesión exitoso');
        navigate('/dashboard');
      } else {
        console.error('Error al iniciar sesión:', response.statusText);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src="../assets/portada.jpg" alt="Imagen de fondo" />
      </div>
      <div className="form-section">
        <div className="form-container">
          <div className="login-form-container">
            <h1>ArquimedesVr</h1>
            <h2>Inicio de Sesión</h2>
            <form onSubmit={handleLogin}>
              <label>
                Usuario o Correo Electrónico:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </label>
              <br />
              <label>
                Contraseña:
                <div className="password-input-container">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="password-input"
                  />
                  <FontAwesomeIcon
                    icon={isPasswordVisible ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    className="password-toggle-icon"
                  />
                </div>
              </label>
              <br />
              <button type="submit">Iniciar Sesión</button>
            </form>
            <p>¿No tienes una cuenta? <a href="#">Registrarse</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;