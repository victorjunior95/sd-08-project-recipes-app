import React, { useEffect } from 'react';
import Header from '../components/Header';
import getIngredients from '../services/API';

export default function Comidas() {
  useEffect(() => {
    getIngredients();
  }, []);
  return (
    <div>
      <Header pageTitle="Comidas" />
    </div>
  );
}
