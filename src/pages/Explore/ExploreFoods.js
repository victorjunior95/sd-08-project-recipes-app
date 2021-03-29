import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Header, Footer } from '../../component';

import { fetchRandom } from '../../services/apiRequests';

export default function ExploreFoods() {
  const [id, setId] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const json = await fetchRandom('https://www.themealdb.com/api/json/v1/1/random.php');
      const foodId = json.meals[0].idMeal;

      setId(foodId);
    };

    fetch();
  }, []);

  return (
    <>
      <Header pageTitle="Explorar Comidas" showSearchButton={ false } />

      <Link
        to="/explorar/comidas/ingredientes"
        data-testid="explore-by-ingredient"
      >
        Por Ingredientes
      </Link>

      <Link
        to="/explorar/comidas/area"
        data-testid="explore-by-area"
      >
        Por Local de Origem
      </Link>

      <Link
        to={ `/comidas/${id}` }
        data-testid="explore-surprise"
      >
        Me Surpreenda!
      </Link>

      <Footer />
    </>
  );
}
