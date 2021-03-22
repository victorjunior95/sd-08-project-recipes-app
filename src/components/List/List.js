import React from 'react';
import PropTypes from 'prop-types';
import Cards from '../Card/Cards';

const List = ({ title, results }) => {
  console.log(results);
  const CARDSFORPAGE = 12;
  return (
    <>
      {results.map((object, index) => {
        if (index < CARDSFORPAGE) {
          return (
            <Cards
              key={ title === 'Comidas' ? object.idMeal : object.idDrink }
              object={ object }
              title={ title }
              index={ index }
            />
          );
        }
        return true;
      })}
    </>
  );
};
List.propTypes = {
  title: PropTypes.string.isRequired,
  results: PropTypes.arrayOf.isRequired,
};

export default List;
