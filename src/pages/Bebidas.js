import React, { useContext } from 'react';
import CardBebida from '../components/CardBebida';
import Footer from '../components/Footer';
import Header from '../components/Header';

import RecipesContext from '../context/RecipesContext';

export default function Bebidas() {
  const { data } = useContext(RecipesContext);
  const { drink } = data;

  return (
    <div>
      <Header pageTitle="Bebidas" />
      <section>
        { drink[0] && drink.map((d, i) => {
          const { idDrink } = d;
          return (i < 12) && (
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
