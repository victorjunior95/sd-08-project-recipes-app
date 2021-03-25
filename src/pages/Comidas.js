import React, { useContext } from 'react';
import CardComida from '../components/CardComida';
import Footer from '../components/Footer';
import Header from '../components/Header';

import RecipesContext from '../context/RecipesContext';

export default function Comidas() {
  const { data } = useContext(RecipesContext);
  const { food } = data;
  const LIMITER = 12;

  return (
    <div>
      <Header pageTitle="Comidas" />
      <section>
        { food && food.map((f, i) => {
          const { idMeal } = f;
          return (i < LIMITER) && (
            <CardComida
              key={ idMeal }
              comida={ f }
              id={ i }
            />
          );
        }) }
      </section>
      <Footer />
    </div>
  );
}
