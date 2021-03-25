import React, { useContext } from 'react';
import CardBebida from '../components/CardBebida';
import Footer from '../components/Footer';
import Header from '../components/Header';

import RecipesContext from '../context/RecipesContext';

export default function Bebidas() {
  const { data } = useContext(RecipesContext);
  const { drink } = data;
  const LIMITER = 12;

  return (
    <div>
      <Header pageTitle="Bebidas" />
      <section>
        { drink && drink.map((d, i) => {
          const { idDrink } = d;
          return (i < LIMITER) && (
            <CardBebida
              key={ idDrink }
              bebida={ d }
              id={ i }
            />
          );
        }) }
      </section>
      <Footer />
    </div>
  );
}
