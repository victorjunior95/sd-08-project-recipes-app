import React from 'react';
import { useHistory } from 'react-router';
import exploreIcon from '../images/exploreIcon.svg';

function ExploreButton() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/explorar');
  };
  return (
    <input
      type="image"
      src={ exploreIcon }
      alt="Botão Explorar"
      data-testid="explore-bottom-btn"
      onClick={ handleClick }
    />
  );
}

export default ExploreButton;
