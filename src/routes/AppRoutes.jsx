// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../components/auth/Register';
import ProductAdvertisePage from '../pages/ProductAdvertisePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/products" element={<ProductAdvertisePage />} />
      <Route path="/user/:userid" element={<ProductDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
