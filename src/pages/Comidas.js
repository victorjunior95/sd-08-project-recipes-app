import React, { useContext } from 'react';
import CardComida from '../components/CardComida';
import Footer from '../components/Footer';
import Header from '../components/Header';

import RecipesContext from '../context/RecipesContext';

export default function Comidas() {
  const { data } = useContext(RecipesContext);
  const { food } = data;

  return (
    <div>
      <Header pageTitle="Comidas" />
      <section>
        { food[0] && food.map((f, i) => {
          const { idMeal } = f;
          return (i < 12) && (
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
