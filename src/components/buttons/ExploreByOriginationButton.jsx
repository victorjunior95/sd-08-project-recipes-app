import React from 'react';
import { useHistory } from 'react-router';

function ExploreByOriginationButton() {
  const history = useHistory();
  return (
    <button
      onClick={ () => history.push('/explorar/comidas/area') }
      className="btnz btn btn-primary"
      type="button"
    >
      Por Local De Origem
    </button>
  );
}

export default ExploreByOriginationButton;
