import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ProfilePage() {
  return (
    <>
      <Header label="Perfil" Search={ () => '' } />
      <Footer />
    </>
  );
}

export default ProfilePage;
