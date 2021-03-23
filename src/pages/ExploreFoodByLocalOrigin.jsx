import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';

function ExploreFoodByLocalOrigin() {
  return (
    <>
      <Header label="Explorar Origem" Search={ SearchButton } />
      <Footer />
    </>
  );
}

export default ExploreFoodByLocalOrigin;
