import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Creators } from '../store/ducks/meals';
import styles from '../styles/components/FilterList.module.css';

const FILTER_LIMIT = 5;

function FilterList({ categories, addNewFilter }) {
  const handleFilter = ({ target }) => {
    addNewFilter(target.innerText);
  };

  return (
    <section className={ styles.filterContainer }>
      {['All', ...categories.slice(0, FILTER_LIMIT)].map((filter) => (
        <button
          data-testid={ `${filter}-category-filter` }
          className={ styles.filterButton }
          type="button"
          key={ filter }
          onClick={ handleFilter }
        >
          <p>{filter}</p>
        </button>))}
    </section>
  );
}

FilterList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  addNewFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addNewFilter: (filter) => dispatch(Creators.addFilter(filter)),
});

export default connect(null, mapDispatchToProps)(FilterList);
