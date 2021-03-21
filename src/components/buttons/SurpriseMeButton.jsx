import React from 'react';
import { useHistory } from 'react-router';

function SurpriseMeButton() {
  const history = useHistory();
  return (
    <button
      onClick={ () => history.push('/explorar/bebidas') }
      className="btnz btn btn-primary"
      data-testid="explore-surprise"
      type="button"
    >
      Me Surpreenda!
    </button>
  );
}

export default SurpriseMeButton;
