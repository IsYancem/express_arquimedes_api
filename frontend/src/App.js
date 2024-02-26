import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Temas from './views/Temas'; 
import Estudiantes from './views/Estudiantes'; 
import loginImage from './loginImage.jpg'; // Importa tu imagen de login
import './App.css'; // Importa tu archivo CSS

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        usernameOrEmail,
        password
      });
      if (response.status === 200) {
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response.data.error);
      alert('Error: ' + error.response.data.error);
    }
  };

  return (
    <div className="login-page-container"> {/* Cambio aquí */}
      <h1>Arquímedes VR</h1> {/* Título */}
      <h2>Iniciar sesión</h2> {/* Subtítulo */}
      <div className="login-container">
        <div className="image-container">
          <img src={loginImage} alt="Login" className="login-image" />
        </div>
        <div className="form-container">
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label>
              Username or Email:
              <input type="text" value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/temas" element={<Temas />} />
        <Route path="/estudiantes" element={<Estudiantes />} />
      </Routes>
    </Router>
  );
}

export default App;