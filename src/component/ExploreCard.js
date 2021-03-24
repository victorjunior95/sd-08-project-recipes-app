import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export default function ExploreCard({ cardName, cardId, linkTo }) {
  const history = useHistory();
  const { location: { pathname } } = history;

  const goToLink = () => history.push(`${pathname}/${linkTo}`);

  return (
    <button type="button" data-testid={ `explore-${cardId}` } onClick={ goToLink }>
      {cardName}
    </button>
  );
}

ExploreCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};
