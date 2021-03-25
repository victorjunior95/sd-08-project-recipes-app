import React from 'react';
import PropTypes from 'prop-types';

const RecommendedRecipeDetails = ({ recommendedRecipes }) => (
  <section>
    <h3>Recomendados</h3>
  </section>
);

RecommendedRecipeDetails.propTypes = {
  recommendedRecipes: PropTypes.shape([]).isRequired,
};

export default RecommendedRecipeDetails;
