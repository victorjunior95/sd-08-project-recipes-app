import React, { useContext, useEffect, useState } from 'react';
import CardComida from '../components/CardComida';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

export default function Comidas() {
  const { data, foodRandom } = useContext(RecipesContext);
  const { food } = data;
  const [card, setCard] = useState(false);

  const LIMITER = 12;

  useEffect(() => {
    foodRandom();
    setCard(true);
  }, []);

  return (
    <div>
      <Header pageTitle="Comidas" />
      <section>
        { card && food.map((f, i) => {
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
