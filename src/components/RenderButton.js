import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

export default class RenderButton extends Component {
  render() {
    const { checkPage, startRecipe, handleProgress,
      checkRecipeProgress, type, id } = this.props;
    return (
      <>
        {!checkPage && (
          <Button
            className="start-recipe-btn"
            data-testid="start-recipe-btn"
            variant="success"
            block
            onClick={ () => {
              startRecipe(type, id);
              handleProgress(type, id);
            } }
          >
            {checkRecipeProgress(type, id)}
          </Button>
        )}

        {checkPage && (
          <Button
            className="start-recipe-btn"
            block
            data-testid="finish-recipe-btn"
          >
            Finalizar receita
          </Button>
        )}
      </>
    );
  }
}

RenderButton.propTypes = {
  checkPage: PropTypes.string,
  startRecipe: PropTypes.func.isRequired,
  handleProgress: PropTypes.func.isRequired,
  checkRecipeProgress: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

RenderButton.defaultProps = {
  checkPage: undefined,
};
