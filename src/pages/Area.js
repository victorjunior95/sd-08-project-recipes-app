import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getAreas } from '../services/API';

function Area() {
  const[areas, setAreas] = useState([]);
  const[foods, setFoods] = useState([]);
  const[haveArea, setHaveArea] = useState(false);
  const[haveFoods, setHaveFoods] = useState(false);

  useEffect(() => {
    const { meals } = getAreas();
    setAreas(meals);
    setHaveArea(true);
  }, []);

  return (
    <section>
      <Header pageTitle="Explorar Área"/>
      <select
        data-testid="explore-by-area-dropdown"
      >
        { haveArea && areas.map(({ strArea }) => (
          <option data-testid={ `${strArea}-option` }>{ strArea }</option>
        )) }
      </select>
      <Footer />
    </section>
  );
}

export default Area;
