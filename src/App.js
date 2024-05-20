import React, { useState, useEffect } from 'react';
import User from './pages/home';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import RegisterPage from './pages/register';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div>
    <Header />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/home" element={<User />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
