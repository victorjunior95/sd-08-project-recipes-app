import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Context from '../../contextApi/Context';
import List from '../../components/List/List';
import Footer from '../../components/Footer/Footer';
import { getAllMeals } from '../../services/FoodsRequests';
import { getAllDrinks } from '../../services/DrinksRequests';
import Categories from '../../components/Categories/Categories';

const Home = ({ title }) => {
  const { searchBar, results, setResults } = useContext(Context);

  useEffect(() => {
    if (title === 'Comidas') {
      getAllMeals().then((response) => setResults(response));
    }
    if (title === 'Bebidas') {
      getAllDrinks().then((response) => setResults(response));
    }
  }, []);
  return (
    <>
      <Header title={ title } />
      {searchBar && <SearchBar title={ title } />}
      <Categories title={ title } />
      {results.length > 0 && <List title={ title } results={ results } />}
      <Footer />
    </>
  );
};
Home.propTypes = { title: PropTypes.string.isRequired };

export default Home;
