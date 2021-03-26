import React, { useContext, useState, useEffect } from 'react';
import CardBebida from '../components/CardBebida';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getCategoryDrinks } from '../services/API';
import RecipesContext from '../context/RecipesContext';

export default function Bebidas() {
  const { data, drinkRandom } = useContext(RecipesContext);
  const { drink } = data;
  const [card, setCard] = useState(false);
  const LIMITER = 12;
  const [card, setCard] = useState(false);
  const FIVE = 5;
  const [listDrinkCategories, setListDrinkCategories] = useState([]);
  useEffect(() => {
    const getListCategories = async () => {
      const listDrinkCategory = await getCategoryDrinks();
      listDrinkCategory.length = FIVE;
      setListDrinkCategories(listDrinkCategory);
    };
    getListCategories();
  }, []);

  useEffect(() => {
    drinkRandom();
    setCard(true);
  }, []);

  return (
    <div>
      <Header pageTitle="Bebidas" />
      <div>
        {
          listDrinkCategories.map((item) => (
            <button
              type="button"
              key={ item.strCategory }
              data-testid={ `${item.strCategory}-category-filter` }
            >
              {item.strCategory}
            </button>))
        }
      </div>
      <section>
        { card && drink.map((d, i) => {
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
