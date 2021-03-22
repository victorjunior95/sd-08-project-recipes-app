import React, { useContext } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RecipesContext from '../../context/RecipesContext';

export default function Explorer() {
  const { setTitleState, isLoading } = useContext(RecipesContext);
  setTitleState();

  if (isLoading) return <p>Carregando...</p>;

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
