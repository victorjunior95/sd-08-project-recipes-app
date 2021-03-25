import React from 'react';
import PropTypes from 'prop-types';

const ExplorerType = ({ showAreaButton = true }) => (
  <>
    <button
      type="button"
      data-testid="explore-by-ingredient"
    >
      Por Ingredientes
    </button>
    {
      showAreaButton && (
        <button
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      )
    }

    <button
      type="button"
      data-testid="explore-surprise"
    >
      Me Surpreenda!
    </button>
  </>
);

ExplorerType.propTypes = {
  showAreaButton: PropTypes.bool.isRequired,
};

export default ExplorerType;
