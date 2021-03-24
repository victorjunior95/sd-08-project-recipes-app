import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipes from '../context/ContextRecipes';

const Explorar = () => {
  const { setHeaderInfo } = useContext(ContextRecipes);

  useEffect(() => {
    setHeaderInfo({ pageTitle: 'Explorar', showSearchIcon: true });
  }, [setHeaderInfo]);

  return (
    <section className="w-100">
      <Header />
      <h1>
        Página Explorar
      </h1>
      <Footer />
    </section>
  );
};

export default Explorar;
