import React from 'react';
import PropTypes from 'prop-types';

const RecommendedRecipeDetails = ({ videoPath }) => (
  <section>
    <h3>Recomendados</h3>
    <iframe
      data-testid="video"
      width="320"
      height="240"
      src={ videoPath }
      title="recipe video"
    />
  </section>
);

RecommendedRecipeDetails.propTypes = {
  videoPath: PropTypes.string.isRequired,
};

export default RecommendedRecipeDetails;
