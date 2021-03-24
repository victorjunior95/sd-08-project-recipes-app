/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../components/animation/Loading';
import RecipeCardsContainer from '../components/Cards/RecipeCardsContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import { Context } from '../context';
import getApiData from '../services/apiRequest';

const MainFoods = () => {
  const { apiData, hideSearchBar } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    hideSearchBar.set(true);
    getApiData('food', 'search.php?s=').then((data) => {
      apiData.set(data);
      setLoading(false);
    });
  }, []);

  return (

    <div>
      <Header
        name="Comidas"
        foodClass="main-food"
        Show
      />
      { !hideSearchBar.value && <Searchbar />}
      { loading ? <Loading /> : (<RecipeCardsContainer
        cardsInfos={ apiData.value }
        cardType="food"
        maxCards={ 12 }
      />
      )}
      <Footer
        foodClass="main-food-footer"
      />
    </div>

  );
};

export default MainFoods;
