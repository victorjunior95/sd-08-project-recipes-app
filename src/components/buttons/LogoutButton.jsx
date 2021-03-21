import React from 'react';
import { useHistory } from 'react-router';

function LogoutButton() {
  const history = useHistory();
  return (
    <button
      onClick={ () => history.push('/') }
      className="btnz btn btn-primary"
      data-testid="profile-logout-btn"
      type="button"
    >
      Sair
    </button>
  );
}

export default LogoutButton;
