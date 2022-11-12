import React from "react";
import ReactDOM from 'react-dom/client';

//importamos React Router Doom v6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Importar paginas 
import Login from "./pages/login";
import Home from "./pages/home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);