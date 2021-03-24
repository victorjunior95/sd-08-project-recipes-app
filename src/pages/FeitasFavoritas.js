import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card';

export default function FeitasFavoritas() {
  const history = useHistory();
  const path = history.location.pathname;
  let listCart = [];
  listCart = JSON.parse(localStorage.getItem('doneRecipes'));
  const [filteredList, setFilteredList] = useState(listCart);
  useEffect(() => {
    setFilteredList(listCart);
  }, []);
  if (path === '/receitas-feitas') {
    return (
      <div>
        <label htmlFor="All">
          <input
            type="radio"
            name="filter"
            value="All"
            id="All"
            data-testid="filter-by-all-btn"
            onClick={ () => setFilteredList(listCart) }
          />
          All
        </label>
        <label htmlFor="Food">
          <input
            type="radio"
            name="filter"
            value="Food"
            id="Food"
            data-testid="filter-by-food-btn"
            onClick={ () => setFilteredList(listCart.filter((a) => a.type === 'comida')) }
          />
          Food
        </label>
        <label htmlFor="Drinks">
          <input
            type="radio"
            name="filter"
            value="Drinks"
            id="Drinks"
            data-testid="filter-by-drink-btn"
            onClick={ () => setFilteredList(listCart.filter((a) => a.type === 'bebida')) }
          />
          Drinks
        </label>
        { filteredList.map((card, index) => (
          <Card
            key={ card.id }
            id={ card.id }
            index={ index }
            name={ card.name }
            thumbnail={ card.image }
            isFood={ card.type === 'comida' }
            category={ card.category }
            doneDate={ card.doneDate }
            tags={ card.tags }
            area={ card.area }
            alcoholic={ card.alcoholicOrNot }
          />
        ))}

      </div>
    );
  }
}
