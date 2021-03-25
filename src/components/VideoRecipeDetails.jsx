import React from 'react';
import PropTypes from 'prop-types';

const VideoRecipeDetails = ({ videoPath }) => (
  <section>
    <h3>Vídeo</h3>
    <iframe
      data-testid="video"
      width="320"
      height="240"
      src={ videoPath }
      title="recipe video"
    />
  </section>
);

VideoRecipeDetails.propTypes = {
  videoPath: PropTypes.string.isRequired,
};

export default VideoRecipeDetails;
