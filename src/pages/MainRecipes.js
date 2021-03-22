import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import CocktailPage from './CocktailPage';

function MainRecipes() {
  return (
    <>
      <Header />
      <CocktailPage />
    </>
  );
}

export default MainRecipes;
