import React from 'react';
import styles from '../styles/components/FilterList.module.css';

const filters = ['All', 'Beef', 'Lamb', 'Chicken', 'Breakfast', 'Dessert'];

function FilterList() {
  return (
    <section className={ styles.filterContainer }>
      {filters.map((filter) => (
        <button
          className={ styles.filterButton }
          type="button"
          key={ filter }
        >
          <p>{filter}</p>
        </button>))}
    </section>
  );
}

export default FilterList;
