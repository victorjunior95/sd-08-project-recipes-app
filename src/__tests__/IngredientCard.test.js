import React from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderWithReduxandRouter from '../renderWithReduxandRouter';
import IngredientCard from '../components/IngredientCard';

describe('IngredientCard.js', () => {
  test('if IngredientCard redirect to meal or drink page', () => {
    renderWithReduxandRouter(<IngredientCard
      ingredient=""
      index=""
      recipe="meal"
    />);
  });
});
