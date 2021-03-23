import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getMeal from '../../services/requestMealForId';
import getDrink from '../../services/RequestDrinkForId';
import CardDetails from '../../components/CardDetail/CardDetail';
import Context from '../../contextApi/Context';

const RecipesInProgress = ({ title }) => {

  return (
    <>
      <div>teste</div>
      <CardDetails title={ title } object={ object } isLoading={ isLoading } />
    </>
    
  );
};

RecipesInProgress.propTypes = {
  title: PropTypes.string.isRequired,
  object: PropTypes.shape({ }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default RecipesInProgress;
