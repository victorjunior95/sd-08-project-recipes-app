import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Header, Footer } from '../../component';

import { fetchRandom } from '../../services/apiRequests';

export default function ExploreDrinks() {
  const [id, setId] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const json = await fetchRandom('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const drinkId = json.drinks[0].idDrink;

      setId(drinkId);
    };

    fetch();
  }, []);

  return (
    <>
      <Header pageTitle="Explorar Bebidas" showSearchButton={ false } />

      <Link
        to="/explorar/bebidas/ingredientes"
        data-testid="explore-by-ingredient"
      >
        Por Ingredientes
      </Link>

      <Link
        to={ `/bebidas/${id}` }
        data-testid="explore-surprise"
      >
        Me Surpreenda!
      </Link>

      <Footer />
    </>
  );
}
