import React, { useEffect, useState, useContext } from 'react';
import LariContext from '../services';

const Recomendacoes = () => {
  const [typeDrinkOrFood, setType] = useState({});

  const { fetchFood, fetchDrink } = useContext(LariContext);

  useEffect = () => {
    fetchFood();
    fetchDrink();
  };

  return (
    <div>
      <p>oi</p>
    </div>);
};

export default Recomendacoes;
