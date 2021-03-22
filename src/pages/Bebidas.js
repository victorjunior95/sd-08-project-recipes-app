import React, { useContext, useEffect } from 'react';
import ContextRecipes from '../context/ContextRecipes';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Bebidas = () => {
  const { setHeaderInfo } = useContext(ContextRecipes);
  useEffect(() => {
    setHeaderInfo({ pageTitle: 'Bebidas', showSearch: true });
  }, [setHeaderInfo]);

  return (
    <section className="w-100">
      <Header />
      <h1>
        Página Bebidas
      </h1>
      <Footer />
    </section>
  );
};

export default Bebidas;
