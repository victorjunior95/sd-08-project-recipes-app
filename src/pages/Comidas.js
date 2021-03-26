import React, { useContext, useEffect, useState } from 'react';
import CardComida from '../components/CardComida';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import { getCategoryFoods } from '../services/API';

export default function Comidas() {
  const { data, foodRandom } = useContext(RecipesContext);
  const { food } = data;
  const [card, setCard] = useState(false);
  const [listFoodCategories, setListFoodCategories] = useState([]);
  const LIMITER = 12;
  const FIVE = 5;

  useEffect(() => {
    // console.log(getCategoryFoods);
    const getListCategories = async () => {
      const listFoodCategory = await getCategoryFoods();
      listFoodCategory.length = FIVE;
      setListFoodCategories(listFoodCategory);
    };
    getListCategories();
  }, []);

  useEffect(() => {
    foodRandom();
    setCard(true);
  }, []);

  return (
    <div>
      <Header pageTitle="Comidas" />
      <div>
        {
          listFoodCategories.map((item) => (
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
