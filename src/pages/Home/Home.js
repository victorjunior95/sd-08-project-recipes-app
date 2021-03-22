import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Context from '../../contextApi/Context';
import List from '../../components/List/List';
import Footer from '../../components/Footer/Footer';

const Home = ({ title }) => {
  const { searchBar, results } = useContext(Context);
  return (
    <>
      <Header title={ title } />
      {searchBar && <SearchBar title={ title } />}
      {(results.length > 0) && <List title={ title } results={ results } />}
      <Footer />
    </>
  );
};
Home.propTypes = { title: PropTypes.string.isRequired };

export default Home;
