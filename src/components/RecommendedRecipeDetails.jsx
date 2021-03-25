import React from 'react';
import PropTypes from 'prop-types';
import CardCarousel from './CardCarousel';

const RecommendedRecipeDetails = ({ recommendedRecipes, page }) => {
  console.log(recommendedRecipes);
  const showCards = () => {
    if (page === 'Comidas') {
      return recommendedRecipes.map((recommended, index) => (
        <CardCarousel
          id={ recommended.idMeal }
          imagePath={ recommended.strDrinkThumb }
          title={ recommended.strDrink }
          category={ recommended.strAlcoholic }
          index={ index }
          key={ index }
        />
      ));
    }
    if (page === 'Bebidas') {
      return recommendedRecipes.map((recommended, index) => (
        <CardCarousel
          id={ recommended.idDrink }
          imagePath={ recommended.strMealThumb }
          title={ recommended.strMeal }
          category={ recommended.strCategory }
          index={ index }
          key={ index }
        />
      ));
    }
  };
  return (
    <section>
      <h3>Recomendados</h3>
      {showCards()}
    </section>
  );
};

RecommendedRecipeDetails.propTypes = {
  recommendedRecipes: PropTypes.shape([]).isRequired,
  page: PropTypes.string.isRequired,
};

export default RecommendedRecipeDetails;
