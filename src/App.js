import React from 'react';
import {Route, Routes,BrowserRouter as Router} from 'react-router-dom';
import Medicos from './components/Medicos/Medicos'
import EditarMedicos from './components/Medicos/EditarMedicos';
import Pacientes from './components/Pacientes/Pacientes'
import Consultas from './components/Consultas/Consultas'
import Add from './components/Add'
import Edit from './components/Edit'
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Consultas/>} />
          <Route exact path='/pacientes' element={<Pacientes/>} />
          <Route exact path='/medicos' element={<Medicos/>} />
          <Route exact path='/medico/edit/:id'  element={<EditarMedicos/>} />
          <Route exact path='/add'  element={<Add/>} />

              </Routes>
      </Router>
    </div>
  );
}
