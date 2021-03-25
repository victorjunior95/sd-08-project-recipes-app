import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import * as mealApi from '../services/mealApi';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import LoadingScreen from '../components/LoadingScreen';

const MealsDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getMealFromApi = async () => {
      setIsFetching(true);
      const getMeal = await mealApi.getById(id);
      setIsFetching(false);
      return getMeal;
    };
    setMeal(getMealFromApi());
    console.log(meal);
  }, []);

  if (isFetching) return <LoadingScreen />;
  return (
    <div>
      <img src={ meal.strMealThumb } alt="Thumbnail" />
      <h2 data-testid="recipe-title">{meal.strMeal}</h2>
      <button type="button" data-testid="share-btn">
        <img src={ shareIcon } alt="Share Icon" />
      </button>
      <button type="button" data-testid="favorite-btn">
        <img src={ blackHeartIcon } alt="Share Icon" />
      </button>
      <p data-testid="recipe-category">{ console.log(meal) }</p>
    </div>
  );
};

// const mapStateToProps = ({ meals: { recipes } }) => ({
//   meals: recipes.recipes,
// });

// MealsDetails.propTypes = {
//   meals: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default (MealsDetails);
