import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/FilterList.module.css';

const FILTER_LIMIT = 5;

function FilterList({ categories }) {
  console.log(categories);
  return (
    <section className={ styles.filterContainer }>
      {['All', ...categories.slice(0, FILTER_LIMIT)].map((filter) => (
        <button
          data-testid={ `${filter}-category-filter` }
          className={ styles.filterButton }
          type="button"
          key={ filter }
        >
          <p>{filter}</p>
        </button>))}
    </section>
  );
}

FilterList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterList;
