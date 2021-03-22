import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import CocktailPage from './CocktailPage';
import Footer from '../components/Footer';

function MainRecipes(history) {
  const { pathname } = history.location;
  return (
    <main>
      <Header title={ pathname } />
      <CocktailPage />
      <Footer />
    </main>
  );
}

export default MainRecipes;
