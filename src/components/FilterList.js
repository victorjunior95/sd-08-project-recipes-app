import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Creators as MealsActions } from '../store/ducks/meals';
// import { Creators as MealsActions } from '../store/ducks/cocktails';
import styles from '../styles/components/FilterList.module.css';

const FILTER_LIMIT = 5;

function FilterList({ categories, fetchByCategory }) {
  const [currentFilter, setCurrentFilter] = useState('All');

  useEffect(() => {
    fetchByCategory(currentFilter);
  }, [currentFilter]);

  const handleChangeFilter = ({ target }) => {
    setCurrentFilter(target.value);
  };

  return (
    <section className={ styles.filterContainer }>
      {['All', ...categories.slice(0, FILTER_LIMIT)].map((filter) => (
        <button
          data-testid={ `${filter}-category-filter` }
          className={ styles.filterButton }
          type="button"
          key={ filter }
          value={ filter }
          onClick={ handleChangeFilter }
        >
          {filter}
        </button>))}
    </section>
  );
}

FilterList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchByCategory: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(MealsActions, dispatch);

export default connect(null, mapDispatchToProps)(FilterList);
