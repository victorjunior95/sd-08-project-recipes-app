import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore() {
  return (
    <>
      <Header label="Explorar" Search={ () => '' } page="Explorar" />
      <Footer />
    </>
  );
}

export default Explore;
