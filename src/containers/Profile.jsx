import React from 'react';
import components from '../components/index';

function Profile() {
  return (
    <div>
      <components.Header title="Perfil" />
      <main className="explore-container">
        <h3 data-testid="profile-email">Email</h3>
        <components.DoneRecipesButton />
        <components.FavoritesButton />
        <components.LogoutButton />
      </main>
      <components.Footer />
    </div>
  );
}

export default Profile;
