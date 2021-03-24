import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import getIngredients from '../services/API';

export default function Comidas() {
  useEffect(() => {
    getIngredients();
  }, []);
  return (
    <div>
      <Header pageTitle="Comidas" />
      <Footer />
    </div>
  );
}
