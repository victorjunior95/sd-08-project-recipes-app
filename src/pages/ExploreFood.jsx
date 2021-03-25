import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import { requestRandomMeal } from '../services/requestFoodsAPI';

function ExploreFood() {
  const history = useHistory();

  const getRandonMeal = async () => {
    const idMeal = await requestRandomMeal();
    return idMeal;
  };

  const handleClick = async () => {
    const id = await getRandonMeal();
    history.push(`/comidas/${id}`);
  };

  return (
    <>
      <Header label="Explorar Comidas" Search={ () => '' } />
      <Link to="/explorar/comidas/ingredientes">
        <Button name="Por Ingredientes" />
      </Link>
      <Link to="/explorar/comidas/area">
        <Button name="Por Local de Origem" />
      </Link>
      <Button name="Me Surpreenda!" onClick={ handleClick } />
      <Footer />
    </>
  );
}

export default ExploreFood;
