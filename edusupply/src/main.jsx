import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Login from './Components/Login/Login.jsx';
import Home from './Components/Home/Home.jsx';
import Register from './Components/Register/Register.jsx';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword.jsx'
import Products from './Components/Products/Products.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
