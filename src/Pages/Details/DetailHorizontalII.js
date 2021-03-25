import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router';
import shareIcon from '../../images/shareIcon.svg';

function DetailHorizontalII({ index, click, recepe }) {
  const { url } = useRouteMatch();

  return (
    <Card.Title data-testid={ `${index}-horizontal-top-text` }>
      { recepe.category }
      <Button
        variant="link"
        style={ { width: '3rem' } }
        onClick={ () => {
          click(true);
          navigator.clipboard.writeText(`http://localhost:3000${url}`);
        } }
      >
        <Card.Img data-testid={ `${index}-horizontal-share-btn` } src={ shareIcon } />
      </Button>
    </Card.Title>
  );
}

DetailHorizontalII.propTypes = {
  index: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
  recepe: PropTypes.shape().isRequired,
};

export default DetailHorizontalII;
