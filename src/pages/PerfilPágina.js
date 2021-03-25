import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const ProfilePage = () => (
  <div>
    <Header title="Perfil" showSearchButton={ false } />
    <p data-testid="profile-email">Email</p>
    <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
    <button type="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
    <button type="button" data-testid="profile-logout-btn">logout</button>
    <Footer />
  </div>
);
export default ProfilePage;
