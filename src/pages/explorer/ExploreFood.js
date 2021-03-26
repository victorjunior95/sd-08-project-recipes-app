import React from 'react';
import ExploreFoodOrDrink from '../../components/ExploreFoodOrDrink';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';

export default function ExploreFood() {
  return (
    <div>
      <Header title="Explorar Comidas" search="false" />
      <ExploreFoodOrDrink
        foodOrDrink="comidas"
      />
      <Footer />
    </div>
  );
}
