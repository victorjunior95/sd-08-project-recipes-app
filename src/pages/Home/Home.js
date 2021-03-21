import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Context from '../../contextApi/Context';

const Home = ({ title }) => {
  const { searchBar } = useContext(Context);
  return (
    <>
      <Header title={ title } />
      {searchBar && <SearchBar />}
    </>
  );
};
Home.propTypes = { title: PropTypes.string.isRequired };

export default Home;
