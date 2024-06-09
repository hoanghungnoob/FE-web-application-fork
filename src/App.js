import React, { useState, useEffect } from 'react';
import User from './pages/home';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import RegisterPage from './pages/register';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './pages/favorite';
import About from './pages/about';
import Contact from './pages/contact';
import ProductDetail from './pages/productDetail';
import Menu from './pages/menu';
import Order from './pages/oder';
import Cart from './pages/shoppingCart'
import { ShoppingCart } from '@mui/icons-material';

function App() {
  return (
    <div>
    <Header />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/home" element={<User />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorite" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
