import React, { useContext } from 'react';
import RecipesContext from '../core/RecipesContext';
import components from '../components/index';
import loading from '../assets/oval.svg';

function Home() {
  const { isLoading } = useContext(RecipesContext);
  return (
    <div className="home-container">
      <components.Header title="Comidas" />
      {isLoading ? <img className="loading-img" src={ loading } alt="loading icon" /> : null}
      <h2>Comidas...</h2>
      <components.Footer />
    </div>
  );
}

export default Home;
