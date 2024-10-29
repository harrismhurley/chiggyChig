import React from 'react';
import Home from './pages/home';
import Register from './pages/register';
import './App.module.scss';
import { Route, Routes,  } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
};

export default App;
