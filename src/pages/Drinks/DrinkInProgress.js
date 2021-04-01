import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import InProgressCard from '../../components/Card/InProgressCard';
import { getDrinkFiltredById } from '../../services/api';

function DrinkInProgress({ match: { params: { id } } }) {
  const [filteredById, setFilteredById] = useState({});
  //   const {
  //     drinkOrFood, id,
  //     strCategory, strDrink, strDrinkThumb, ingredientsAndMeasuresList,
  //     strInstructions, strAlcoholic } = state;

  useEffect(() => {
    const requestingAPI = async () => {
      const fetchById = await getDrinkFiltredById(id);
      setFilteredById(fetchById);
    }; requestingAPI();
  }, [id]);

  return (
    <div>
      {console.log(filteredById)}
    </div>
  );
//     <div>
//       {console.log('drinkINProgress', state)}
//       { console.log(props)}
//       <InProgressCard
//         drinkOrFood={ drinkOrFood }
//         id={ id }
//         category={ strCategory }
//         title={ strDrink }
//         img={ strDrinkThumb }
//         ingredients={ ingredientsAndMeasuresList }
//         alcohol={ strAlcoholic }
//         instructions={ strInstructions }
//       />
//     </div>
//   );
}

DrinkInProgress.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.shape({
      drinkOrFood: PropTypes.string,
      id: PropTypes.string,
      strCategory: PropTypes.string,
      strAlcoholic: PropTypes.string,
      strDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
      ingredientsAndMeasuresList: PropTypes.arrayOf(PropTypes.string),
      strInstructions: PropTypes.string,
    }),
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
};

export default DrinkInProgress;
