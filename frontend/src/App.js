import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './views/LoginForm'; 
import Dashboard from './views/Dashboard'; 
import Temas from './views/Temas'; 
import Estudiantes from './views/Estudiantes'; 
import AgregarEstudiante from './views/AgregarEstudiante'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/temas" element={<Temas />} />
        <Route path="/estudiantes" element={<Estudiantes />} />
        <Route path="/agregarEstudiante" element={<AgregarEstudiante />} />
      </Routes>
    </Router>
  );
}

export default App;