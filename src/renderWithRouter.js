import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import ProviderRecipes from './context/ProviderRecipes';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Router history={ history }>
        <ProviderRecipes>
          {component}
        </ProviderRecipes>
      </Router>,
    ),
    history,
  });
};

export default renderWithRouter;
